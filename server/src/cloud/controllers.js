import cloudinary from 'cloudinary'
import { BadRequestError } from '../errors/customTypes.js'

export const uploadImageToTheCloud = async (image) => {
  try {
    const uploadedImage = await cloudinary.v2.uploader.upload(image, {
      folder: 'e-commerce-assets',
      use_filename: false,
      unique_filename: false,
      overwrite: false,
      invalidate: true,
      format: 'webp'
    })

    console.log(uploadedImage)
    return uploadedImage.secure_url
  } catch (err) {
    const { error: { code } } = err

    if (code === 'ENAMETOOLONG') {
      throw new BadRequestError(
        'There was an issue with the upload file process. The file must be a valid format.'
      )
    }

    throw err
  }
}
