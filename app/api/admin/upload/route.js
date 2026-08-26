import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized: Admin session required' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const allowedTypes = [
      // Images
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/gif',
      'image/svg+xml',
      // Documents & Frameworks
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
      'application/msword', // doc
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
      'application/vnd.ms-excel', // xls
      'application/zip',
      'text/plain',
      'text/csv',
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: Images (JPG, PNG, WebP) and Documents (PDF, DOCX, XLSX, CSV, ZIP).' },
        { status: 400 }
      );
    }

    // Max 30MB for documents & images
    if (file.size > 30 * 1024 * 1024) {
      return NextResponse.json({ error: 'File exceeds 30MB limit' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const isDocument = file.type.startsWith('application/') || file.type.startsWith('text/');
    const subFolder = isDocument ? 'docs' : 'images';
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', subFolder);

    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Create safe filename
    const originalName = file.name.replace(/[^\w.-]/g, '_');
    const extension = path.extname(originalName) || (isDocument ? '.pdf' : '.jpg');
    const baseName = path.basename(originalName, extension);
    const fileName = `${baseName}-${Date.now()}${extension}`;
    const filePath = path.join(uploadsDir, fileName);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${subFolder}/${fileName}`;

    // Format readable size
    let formattedSize = '1.0 MB';
    if (file.size < 1024 * 1024) {
      formattedSize = `${(file.size / 1024).toFixed(0)} KB`;
    } else {
      formattedSize = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName,
      originalName: file.name,
      size: file.size,
      formattedSize,
      type: file.type,
      isDocument,
    });
  } catch (err) {
    console.error('File upload error:', err);
    return NextResponse.json({ error: 'Failed to upload file: ' + err.message }, { status: 500 });
  }
}
