import fs from 'fs';
import path from 'path';
import { journalArticles } from '@/data/journal';
import { resourcesData } from '@/data/resources';
import { generateSlug } from '@/lib/utils';
import { getMongoDb } from './mongodb';

const DB_DIR = path.join(process.cwd(), 'data', 'db');
const BLOGS_FILE = path.join(DB_DIR, 'blogs.json');
const RESOURCES_FILE = path.join(DB_DIR, 'resources.json');

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
    return true;
  } catch {
    return false;
  }
}

/**
 * Seeds MongoDB collection if empty.
 */
async function ensureMongoSeeded(db) {
  try {
    const blogsCollection = db.collection('blogs');
    const blogCount = await blogsCollection.countDocuments();
    if (blogCount === 0) {
      const localBlogs = readLocalJson(BLOGS_FILE, []);
      if (localBlogs.length > 0) {
        await blogsCollection.insertMany(localBlogs);
      }
    }

    const resourcesCollection = db.collection('resources');
    const resCount = await resourcesCollection.countDocuments();
    if (resCount === 0) {
      const localResources = readLocalJson(RESOURCES_FILE, []);
      if (localResources.length > 0) {
        await resourcesCollection.insertMany(localResources);
      }
    }
  } catch (err) {
    console.error('Error seeding MongoDB:', err);
  }
}

/* ==========================================================================
   BLOG / ARTICLE METHODS (HYBRID: MONGODB ATLAS + LOCAL FALLBACK)
   ========================================================================== */

export async function getAllBlogs({ includeDrafts = false, category = null, search = '' } = {}) {
  const db = await getMongoDb();

  if (db) {
    try {
      await ensureMongoSeeded(db);
      const query = {};
      if (!includeDrafts) {
        query.isPublished = { $ne: false };
      }
      if (category && category.toLowerCase() !== 'all') {
        query.category = { $regex: new RegExp(`^${category}$`, 'i') };
      }
      if (search && search.trim()) {
        const q = search.trim();
        query.$or = [
          { title: { $regex: q, $options: 'i' } },
          { subtitle: { $regex: q, $options: 'i' } },
          { excerpt: { $regex: q, $options: 'i' } },
          { content: { $regex: q, $options: 'i' } },
        ];
      }

      const blogs = await db.collection('blogs').find(query).sort({ createdAt: -1 }).toArray();
      return blogs.map((b) => ({ ...b, _id: b._id.toString() }));
    } catch (err) {
      console.error('MongoDB getAllBlogs error, falling back to local JSON:', err);
    }
  }

  // Fallback to local JSON
  let blogs = readLocalJson(BLOGS_FILE, []);
  if (!includeDrafts) {
    blogs = blogs.filter((b) => b.isPublished !== false);
  }
  if (category && category.toLowerCase() !== 'all') {
    blogs = blogs.filter((b) => b.category?.toLowerCase() === category.toLowerCase());
  }
  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    blogs = blogs.filter(
      (b) =>
        b.title?.toLowerCase().includes(q) ||
        b.subtitle?.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q) ||
        b.content?.toLowerCase().includes(q)
    );
  }
  blogs.sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
  return blogs;
}

export async function getBlogById(id) {
  const db = await getMongoDb();
  if (db) {
    try {
      const blog = await db.collection('blogs').findOne({ id });
      if (blog) return { ...blog, _id: blog._id.toString() };
    } catch (err) {
      console.error('MongoDB getBlogById error:', err);
    }
  }

  const blogs = readLocalJson(BLOGS_FILE, []);
  return blogs.find((b) => b.id === id) || null;
}

export async function getBlogBySlug(slug) {
  const db = await getMongoDb();
  if (db) {
    try {
      const blog = await db.collection('blogs').findOne({ slug });
      if (blog) return { ...blog, _id: blog._id.toString() };
    } catch (err) {
      console.error('MongoDB getBlogBySlug error:', err);
    }
  }

  const blogs = readLocalJson(BLOGS_FILE, []);
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

  // Local JSON update
  const blogs = readLocalJson(BLOGS_FILE, []);
  const index = blogs.findIndex((b) => b.id === id);
  if (index === -1) return null;

  const current = blogs[index];
  const updatedBlog = {
    ...current,
    ...updatePayload,
    id: current.id,
  };
  blogs[index] = updatedBlog;
  writeLocalJson(BLOGS_FILE, blogs);
  return updatedBlog;
}

export async function deleteBlog(id) {
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
  if (filtered.length === blogs.length) return false;
  writeLocalJson(BLOGS_FILE, filtered);
  return true;
}

/* ==========================================================================
   RESOURCE & FRAMEWORK METHODS (HYBRID: MONGODB ATLAS + LOCAL FALLBACK)
   ========================================================================== */

export async function getAllResources({ category = null, search = '' } = {}) {
  const db = await getMongoDb();

  if (db) {
    try {
      await ensureMongoSeeded(db);
      const query = {};
      if (category && category.toLowerCase() !== 'all') {
        query.category = { $regex: new RegExp(`^${category}$`, 'i') };
      }
      if (search && search.trim()) {
        const q = search.trim();
        query.$or = [
          { title: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } },
          { category: { $regex: q, $options: 'i' } },
        ];
      }

      const resources = await db.collection('resources').find(query).sort({ createdAt: -1 }).toArray();
      return resources.map((r) => ({ ...r, _id: r._id.toString() }));
    } catch (err) {
      console.error('MongoDB getAllResources error, falling back to local JSON:', err);
    }
  }

  // Fallback to local JSON
  let resources = readLocalJson(RESOURCES_FILE, []);
  if (category && category.toLowerCase() !== 'all') {
    resources = resources.filter((r) => r.category?.toLowerCase() === category.toLowerCase());
  }
  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    resources = resources.filter(
      (r) =>
        r.title?.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q) ||
        r.category?.toLowerCase().includes(q)
    );
  }
  resources.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return resources;
}

export async function getResourceById(id) {
  const db = await getMongoDb();
  if (db) {
    try {
      const resource = await db.collection('resources').findOne({ id });
      if (resource) return { ...resource, _id: resource._id.toString() };
    } catch (err) {
      console.error('MongoDB getResourceById error:', err);
    }
  }

  const resources = readLocalJson(RESOURCES_FILE, []);
  return resources.find((r) => r.id === id) || null;
}

export async function createResource(resourceData) {
  const now = new Date();
  const id = resourceData.id ? generateSlug(resourceData.id) : `resource-${Date.now()}`;

  const newResource = {
    id,
    title: resourceData.title || 'Untitled Framework',
    category: resourceData.category || 'STRATEGY',
    type: resourceData.type || 'Guide & Framework (PDF)',
    description: resourceData.description || '',
    readTime: resourceData.readTime || '8 min read',
    format: resourceData.format || 'Downloadable PDF',
    fileSize: resourceData.fileSize || '1.5 MB',
    downloadUrl: resourceData.downloadUrl || '#',
    keyTakeaways: Array.isArray(resourceData.keyTakeaways) ? resourceData.keyTakeaways : [],
    coverImage: resourceData.coverImage || '/images/service-business.jpg',
    isPublished: resourceData.isPublished !== undefined ? resourceData.isPublished : true,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };

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
    keyTakeaways: Array.isArray(updateData.keyTakeaways) ? updateData.keyTakeaways : undefined,
    updatedAt: new Date().toISOString(),
  };

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
  if (index === -1) return null;

  const current = resources[index];
  const updatedResource = {
    ...current,
    ...updatePayload,
    id: current.id,
    keyTakeaways: Array.isArray(updateData.keyTakeaways) ? updateData.keyTakeaways : current.keyTakeaways,
  };
  resources[index] = updatedResource;
  writeLocalJson(RESOURCES_FILE, resources);
  return updatedResource;
}

export async function deleteResource(id) {
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
  if (filtered.length === resources.length) return false;
  writeLocalJson(RESOURCES_FILE, filtered);
  return true;
}
