import fs from 'fs';
import path from 'path';
import { journalArticles } from '@/data/journal';
import { resourcesData } from '@/data/resources';

const DB_DIR = path.join(process.cwd(), 'data', 'db');
const BLOGS_FILE = path.join(DB_DIR, 'blogs.json');
const RESOURCES_FILE = path.join(DB_DIR, 'resources.json');

/**
 * Ensures the DB directory and initial JSON data files exist.
 */
function ensureDbInitialized() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  // Seed blogs if not existing
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
      createdAt: new Date(Date.now() - (index * 86400000 * 7)).toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(initialBlogs, null, 2), 'utf8');
  }

  // Seed resources if not existing
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
      createdAt: new Date(Date.now() - (index * 86400000 * 5)).toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    fs.writeFileSync(RESOURCES_FILE, JSON.stringify(initialResources, null, 2), 'utf8');
  }
}

/**
 * Reads a JSON file safely.
 */
function readJsonFile(filePath, fallback = []) {
  try {
    ensureDbInitialized();
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return fallback;
  }
}

/**
 * Writes a JSON file atomically.
 */
function writeJsonFile(filePath, data) {
  try {
    ensureDbInitialized();
    const tempFile = `${filePath}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempFile, filePath);
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
}

/**
 * Generates a URL-friendly slug.
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* ==========================================================================
   BLOG / JOURNAL ARTICLE METHODS
   ========================================================================== */

export async function getAllBlogs({ includeDrafts = false, category = null, search = '' } = {}) {
  let blogs = readJsonFile(BLOGS_FILE, []);

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

  // Sort by createdAt descending
  blogs.sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
  return blogs;
}

export async function getBlogById(id) {
  const blogs = readJsonFile(BLOGS_FILE, []);
  return blogs.find((b) => b.id === id) || null;
}

export async function getBlogBySlug(slug) {
  const blogs = readJsonFile(BLOGS_FILE, []);
  return blogs.find((b) => b.slug === slug) || null;
}

export async function createBlog(blogData) {
  const blogs = readJsonFile(BLOGS_FILE, []);
  const now = new Date();

  const id = `blog-${Date.now()}`;
  let slug = blogData.slug ? generateSlug(blogData.slug) : generateSlug(blogData.title);

  // Ensure slug uniqueness
  if (blogs.some((b) => b.slug === slug)) {
    slug = `${slug}-${Date.now().toString().slice(-4)}`;
  }

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

  blogs.unshift(newBlog);
  writeJsonFile(BLOGS_FILE, blogs);
  return newBlog;
}

export async function updateBlog(id, updateData) {
  const blogs = readJsonFile(BLOGS_FILE, []);
  const index = blogs.findIndex((b) => b.id === id);
  if (index === -1) return null;

  const current = blogs[index];
  let slug = updateData.slug ? generateSlug(updateData.slug) : current.slug;

  // If slug changed, ensure uniqueness
  if (slug !== current.slug && blogs.some((b) => b.slug === slug && b.id !== id)) {
    slug = `${slug}-${Date.now().toString().slice(-4)}`;
  }

  const updatedBlog = {
    ...current,
    ...updateData,
    id: current.id,
    slug,
    updatedAt: new Date().toISOString(),
  };

  blogs[index] = updatedBlog;
  writeJsonFile(BLOGS_FILE, blogs);
  return updatedBlog;
}

export async function deleteBlog(id) {
  const blogs = readJsonFile(BLOGS_FILE, []);
  const filtered = blogs.filter((b) => b.id !== id);
  if (filtered.length === blogs.length) return false;
  writeJsonFile(BLOGS_FILE, filtered);
  return true;
}

/* ==========================================================================
   RESOURCE & FRAMEWORK METHODS
   ========================================================================== */

export async function getAllResources({ category = null, search = '' } = {}) {
  let resources = readJsonFile(RESOURCES_FILE, []);

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
  const resources = readJsonFile(RESOURCES_FILE, []);
  return resources.find((r) => r.id === id) || null;
}

export async function createResource(resourceData) {
  const resources = readJsonFile(RESOURCES_FILE, []);
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

  resources.unshift(newResource);
  writeJsonFile(RESOURCES_FILE, resources);
  return newResource;
}

export async function updateResource(id, updateData) {
  const resources = readJsonFile(RESOURCES_FILE, []);
  const index = resources.findIndex((r) => r.id === id);
  if (index === -1) return null;

  const current = resources[index];
  const updatedResource = {
    ...current,
    ...updateData,
    id: current.id,
    keyTakeaways: Array.isArray(updateData.keyTakeaways) ? updateData.keyTakeaways : current.keyTakeaways,
    updatedAt: new Date().toISOString(),
  };

  resources[index] = updatedResource;
  writeJsonFile(RESOURCES_FILE, resources);
  return updatedResource;
}

export async function deleteResource(id) {
  const resources = readJsonFile(RESOURCES_FILE, []);
  const filtered = resources.filter((r) => r.id !== id);
  if (filtered.length === resources.length) return false;
  writeJsonFile(RESOURCES_FILE, filtered);
  return true;
}
