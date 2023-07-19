import { cloudErrorHandler } from '../errors/cloudErrorHandler.js'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

export const uploadStaticFileToTheCloud = cloudErrorHandler(async (buffer) => {
  const image = `data:image/jpg;base64,${buffer.toString('base64')}`

  const uploadedImage = await cloudinary.uploader.upload(image, {
    folder: 'e-commerce-assets',
    unique_filename: true,
    use_filename: false,
    overwrite: false,
    invalidate: true,
    format: 'webp'
  })

  return uploadedImage.secure_url
})
