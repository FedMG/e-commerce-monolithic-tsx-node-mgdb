import cloudinary from 'cloudinary'
import { cloudErrorHandler } from '../errors/cloudErrorHandler.js'
import { getPublicID } from '../utils/functions.js'

const uploadFileToTheCloud = cloudErrorHandler(async (buffer) => {
  const image = `data:image/jpg;base64,${buffer.toString('base64')}`
  const uploadedImage = await cloudinary.v2.uploader.upload(image, {
    folder: 'e-commerce-assets',
    unique_filename: true,
    use_filename: false,
    overwrite: false,
    invalidate: true,
    format: 'webp'
  })

  return uploadedImage.secure_url
})

const updateFileInTheCloud = cloudErrorHandler(async (secureURL, buffer) => {
  const publicID = getPublicID(secureURL)

  const image = `data:image/jpg;base64,${buffer.toString('base64')}`
  const updatedImage = await cloudinary.v2.uploader.upload(image, {
    public_id: publicID,
    overwrite: true,
    invalidate: true,
    format: 'webp'
  })

  return updatedImage.secure_url
})

const deleteFileInTheCloud = cloudErrorHandler(async (secureURL) => {
  const publicID = getPublicID(secureURL)
  cloudinary.v2.uploader.destroy(publicID)
})

export {
  uploadFileToTheCloud,
  updateFileInTheCloud,
  deleteFileInTheCloud
}
