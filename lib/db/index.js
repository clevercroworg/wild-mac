import fs from 'fs';
import path from 'path';
import { journalArticles } from '@/data/journal';
import { resourcesData } from '@/data/resources';
import { generateSlug } from '@/lib/utils';
import { getMongoDb } from './mongodb';

const DB_DIR = path.join(process.cwd(), 'data', 'db');
const BLOGS_FILE = path.join(DB_DIR, 'blogs.json');
const RESOURCES_FILE = path.join(DB_DIR, 'resources.json');

// High-speed In-Memory Read Cache (TTL: 45 seconds)
const memoryCache = {
  blogs: null,
  blogsTime: 0,
  resources: null,
  resourcesTime: 0,
  isInitialized: false,
};

const CACHE_TTL_MS = 45000;

function invalidateCache() {
  memoryCache.blogs = null;
  memoryCache.blogsTime = 0;
  memoryCache.resources = null;
  memoryCache.resourcesTime = 0;
}

/**
 * Ensures the local JSON database exists and is pre-seeded.
 */
function ensureLocalDbInitialized() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  if (!fs.existsSync(BLOGS_FILE)) {
    const initialBlogs = journalArticles.map((article, index) => ({
      id: `blog-${index + 1}-${article.slug}`,
      slug: article.slug,
      title: article.title,
      subtitle: article.subtitle || '',
      category: article.category || 'Strategy',
      date: article.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: article.readTime || '5 min read',
      isFeatured: !!article.isFeatured,
      isPublished: true,
      excerpt: article.excerpt || '',
      content: article.content || '',
      quote: article.quote || '',
      coverImage: index === 0 ? '/images/community-gathering.jpg' : '/images/service-business.jpg',
      createdAt: new Date(Date.now() - index * 86400000 * 7).toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(initialBlogs, null, 2), 'utf8');
  }

  if (!fs.existsSync(RESOURCES_FILE)) {
    const initialResources = resourcesData.map((res, index) => ({
      id: res.id || `resource-${index + 1}`,
      title: res.title,
      category: res.category || 'STRATEGY',
      type: res.type || 'Guide & Framework',
      description: res.description || '',
      readTime: res.readTime || '8 min read',
      format: res.format || 'Downloadable PDF',
      fileSize: res.fileSize || '1.5 MB',
      downloadUrl: res.downloadUrl || '#',
      keyTakeaways: res.keyTakeaways || [],
      coverImage: index === 0 ? '/images/service-business.jpg' : '/images/author-workspace.jpg',
      isPublished: true,
      createdAt: new Date(Date.now() - index * 86400000 * 5).toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    fs.writeFileSync(RESOURCES_FILE, JSON.stringify(initialResources, null, 2), 'utf8');
  }
}

function readLocalJson(filePath, fallback = []) {
  try {
    ensureLocalDbInitialized();
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return fallback;
  }
}

function writeLocalJson(filePath, data) {
  try {
    ensureLocalDbInitialized();
    const tempFile = `${filePath}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempFile, filePath);
    invalidateCache();
    return true;
  } catch {
    return false;
  }
}

/**
 * Initializes database indexes and seeds once on instance startup.
 */
async function ensureDbOptimized(db) {
  if (memoryCache.isInitialized) return;
  memoryCache.isInitialized = true;

  try {
    const blogsCollection = db.collection('blogs');
    const resourcesCollection = db.collection('resources');

    // Create high-performance query indexes in background
    Promise.all([
      blogsCollection.createIndex({ slug: 1 }, { background: true }),
      blogsCollection.createIndex({ isPublished: 1, createdAt: -1 }, { background: true }),
      resourcesCollection.createIndex({ id: 1 }, { background: true }),
      resourcesCollection.createIndex({ isPublished: 1, createdAt: -1 }, { background: true }),
    ]).catch(() => {});
  } catch (err) {
    console.warn('DB index optimization note:', err.message);
  }
}

/* ==========================================================================
   BLOG / ARTICLE METHODS (CACHED + MONGODB ATLAS + LOCAL FALLBACK)
   ========================================================================== */

export async function getAllBlogs({ includeDrafts = false, category = null, search = '' } = {}) {
  const now = Date.now();
  const db = await getMongoDb();

  let allBlogs = null;

  // Check in-memory cache
  if (memoryCache.blogs && now - memoryCache.blogsTime < CACHE_TTL_MS) {
    allBlogs = memoryCache.blogs;
  } else if (db) {
    try {
      await ensureDbOptimized(db);
      const blogs = await db
        .collection('blogs')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      allBlogs = blogs.map((b) => ({ ...b, _id: b._id.toString() }));
      memoryCache.blogs = allBlogs;
      memoryCache.blogsTime = now;
    } catch (err) {
      console.warn('MongoDB getAllBlogs warning, using local:', err.message);
    }
  }

  // Fallback if not loaded
  if (!allBlogs) {
    allBlogs = readLocalJson(BLOGS_FILE, []);
    allBlogs.sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
  }

  // Apply in-memory filtering (Instant: < 0.1ms)
  let filtered = [...allBlogs];
  if (!includeDrafts) {
    filtered = filtered.filter((b) => b.isPublished !== false && b.published !== false);
  }
  if (category && category.toLowerCase() !== 'all') {
    filtered = filtered.filter((b) => b.category?.toLowerCase() === category.toLowerCase());
  }
  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(
      (b) =>
        b.title?.toLowerCase().includes(q) ||
        b.subtitle?.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q) ||
        b.content?.toLowerCase().includes(q)
    );
  }

  return filtered;
}

export async function getBlogById(id) {
  const blogs = await getAllBlogs({ includeDrafts: true });
  return blogs.find((b) => b.id === id) || null;
}

export async function getBlogBySlug(slug) {
  const blogs = await getAllBlogs({ includeDrafts: true });
  return blogs.find((b) => b.slug === slug) || null;
}

export async function createBlog(blogData) {
  const now = new Date();
  const id = `blog-${Date.now()}`;
  let slug = blogData.slug ? generateSlug(blogData.slug) : generateSlug(blogData.title);

  const newBlog = {
    id,
    slug,
    title: blogData.title || 'Untitled Article',
    subtitle: blogData.subtitle || '',
    category: blogData.category || 'Strategy',
    date: blogData.date || now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: blogData.readTime || '5 min read',
    isFeatured: !!blogData.isFeatured,
    isPublished: blogData.isPublished !== undefined ? blogData.isPublished : true,
    excerpt: blogData.excerpt || '',
    content: blogData.content || '',
    quote: blogData.quote || '',
    coverImage: blogData.coverImage || '/images/community-gathering.jpg',
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };

  invalidateCache();

  const db = await getMongoDb();
  if (db) {
    try {
      await db.collection('blogs').insertOne({ ...newBlog });
    } catch (err) {
      console.error('MongoDB createBlog error:', err);
    }
  }

  // Also sync to local JSON
  const blogs = readLocalJson(BLOGS_FILE, []);
  blogs.unshift(newBlog);
  writeLocalJson(BLOGS_FILE, blogs);

  return newBlog;
}

export async function updateBlog(id, updateData) {
  let slug = updateData.slug ? generateSlug(updateData.slug) : undefined;
  const updatePayload = {
    ...updateData,
    ...(slug ? { slug } : {}),
    updatedAt: new Date().toISOString(),
  };

  invalidateCache();

  const db = await getMongoDb();
  if (db) {
    try {
      await db.collection('blogs').updateOne({ id }, { $set: updatePayload });
      const updated = await db.collection('blogs').findOne({ id });
      if (updated) return { ...updated, _id: updated._id.toString() };
    } catch (err) {
      console.error('MongoDB updateBlog error:', err);
    }
  }

  const blogs = readLocalJson(BLOGS_FILE, []);
  const index = blogs.findIndex((b) => b.id === id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...updatePayload };
    writeLocalJson(BLOGS_FILE, blogs);
    return blogs[index];
  }

  return null;
}

export async function deleteBlog(id) {
  invalidateCache();

  const db = await getMongoDb();
  if (db) {
    try {
      await db.collection('blogs').deleteOne({ id });
    } catch (err) {
      console.error('MongoDB deleteBlog error:', err);
    }
  }

  const blogs = readLocalJson(BLOGS_FILE, []);
  const filtered = blogs.filter((b) => b.id !== id);
  writeLocalJson(BLOGS_FILE, filtered);

  return true;
}

/* ==========================================================================
   RESOURCE METHODS (CACHED + MONGODB ATLAS + LOCAL FALLBACK)
   ========================================================================== */

export async function getAllResources({ includeDrafts = false, category = null, search = '' } = {}) {
  const now = Date.now();
  const db = await getMongoDb();

  let allResources = null;

  // Check in-memory cache
  if (memoryCache.resources && now - memoryCache.resourcesTime < CACHE_TTL_MS) {
    allResources = memoryCache.resources;
  } else if (db) {
    try {
      await ensureDbOptimized(db);
      const resources = await db
        .collection('resources')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      allResources = resources.map((r) => ({ ...r, _id: r._id.toString() }));
      memoryCache.resources = allResources;
      memoryCache.resourcesTime = now;
    } catch (err) {
      console.warn('MongoDB getAllResources warning, using local:', err.message);
    }
  }

  // Fallback if not loaded
  if (!allResources) {
    allResources = readLocalJson(RESOURCES_FILE, []);
    allResources.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  // In-memory filtering (Instant: < 0.1ms)
  let filtered = [...allResources];
  if (!includeDrafts) {
    filtered = filtered.filter((r) => r.isPublished !== false && r.published !== false);
  }
  if (category && category.toLowerCase() !== 'all') {
    filtered = filtered.filter((r) => r.category?.toLowerCase() === category.toLowerCase());
  }
  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(
      (r) =>
        r.title?.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q) ||
        r.type?.toLowerCase().includes(q)
    );
  }

  return filtered;
}

export async function getResourceById(id) {
  const resources = await getAllResources({ includeDrafts: true });
  return resources.find((r) => r.id === id) || null;
}

export async function createResource(resourceData) {
  const now = new Date();
  const id = `resource-${Date.now()}`;

  const newResource = {
    id,
    title: resourceData.title || 'Untitled Resource',
    category: resourceData.category || 'STRATEGY',
    type: resourceData.type || 'Guide & Framework',
    description: resourceData.description || '',
    readTime: resourceData.readTime || '8 min read',
    format: resourceData.format || 'Downloadable PDF',
    fileSize: resourceData.fileSize || '1.5 MB',
    downloadUrl: resourceData.downloadUrl || '#',
    keyTakeaways: Array.isArray(resourceData.keyTakeaways) ? resourceData.keyTakeaways : [],
    coverImage: resourceData.coverImage || '/images/service-business.jpg',
    isPublished: resourceData.isPublished !== undefined ? resourceData.isPublished : true,
    downloadCount: 0,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };

  invalidateCache();

  const db = await getMongoDb();
  if (db) {
    try {
      await db.collection('resources').insertOne({ ...newResource });
    } catch (err) {
      console.error('MongoDB createResource error:', err);
    }
  }

  const resources = readLocalJson(RESOURCES_FILE, []);
  resources.unshift(newResource);
  writeLocalJson(RESOURCES_FILE, resources);

  return newResource;
}

export async function updateResource(id, updateData) {
  const updatePayload = {
    ...updateData,
    updatedAt: new Date().toISOString(),
  };

  invalidateCache();

  const db = await getMongoDb();
  if (db) {
    try {
      await db.collection('resources').updateOne({ id }, { $set: updatePayload });
      const updated = await db.collection('resources').findOne({ id });
      if (updated) return { ...updated, _id: updated._id.toString() };
    } catch (err) {
      console.error('MongoDB updateResource error:', err);
    }
  }

  const resources = readLocalJson(RESOURCES_FILE, []);
  const index = resources.findIndex((r) => r.id === id);
  if (index !== -1) {
    resources[index] = { ...resources[index], ...updatePayload };
    writeLocalJson(RESOURCES_FILE, resources);
    return resources[index];
  }

  return null;
}

export async function deleteResource(id) {
  invalidateCache();

  const db = await getMongoDb();
  if (db) {
    try {
      await db.collection('resources').deleteOne({ id });
    } catch (err) {
      console.error('MongoDB deleteResource error:', err);
    }
  }

  const resources = readLocalJson(RESOURCES_FILE, []);
  const filtered = resources.filter((r) => r.id !== id);
  writeLocalJson(RESOURCES_FILE, filtered);

  return true;
}

export async function incrementResourceDownloads(id) {
  const db = await getMongoDb();
  if (db) {
    try {
      await db.collection('resources').updateOne({ id }, { $inc: { downloadCount: 1 } });
    } catch (err) {
      console.error('MongoDB incrementResourceDownloads error:', err);
    }
  }

  const resources = readLocalJson(RESOURCES_FILE, []);
  const res = resources.find((r) => r.id === id);
  if (res) {
    res.downloadCount = (res.downloadCount || 0) + 1;
    writeLocalJson(RESOURCES_FILE, resources);
  }
}
