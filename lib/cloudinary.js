import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Upload a Buffer to Cloudinary
 * @param {Buffer} buffer - File buffer
 * @param {Object} options - Cloudinary upload options
 * @returns {Promise<Object>} Cloudinary upload result
 */
export async function uploadToCloudinary(buffer, options = {}) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: options.folder || 'wildmac',
        resource_type: options.resourceType || 'auto',
        public_id: options.publicId,
        use_filename: true,
        unique_filename: true,
        overwrite: false,
        ...options,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    uploadStream.end(buffer);
  });
}

/**
 * Check if Cloudinary is configured
 */
export function isCloudinaryConfigured() {
  return Boolean(
    (process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
}
