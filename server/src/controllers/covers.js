import Cover from '../models/Cover.js'

import { StatusCodes } from 'http-status-codes'
import { NotFoundError, BadRequestError } from '../errors/customTypes.js'

import { setCoverQuery } from './queries/setCoverQuery.js'
import {
  uploadFileToTheCloud,
  updateFileInTheCloud,
  deleteFileInTheCloud
} from '../cloud/controllers.js'

const getAllCovers = async (req, res) => {
  const { alt, brand, category, sort, fields } = req.query
  
  const covers = await setCoverQuery({
    alt,
    brand,
    category,
    sort,
    fields,
  })

  res.status(StatusCodes.OK).json({ covers, numHits: covers.length })
}

const createCover = async (req, res) => {
  const cover = new Cover({ ...req.body })

  if (!req.file) throw new BadRequestError('image is required.')

  const { buffer } = req.file
  cover.image.src = await uploadFileToTheCloud(buffer)
  cover.save()

  res.status(StatusCodes.CREATED).json({ cover })
}

const getCover = async (req, res, _next) => {
  const { id: coverId } = req.params
  const cover = await Cover.findOne({ _id: coverId })
  
  if (!cover) {
    throw new NotFoundError(`There is not a cover with id ${coverId}`)
  }

  res.status(StatusCodes.OK).json({ cover })
}

const deleteCover = async (req, res, _next) => {
  const { id: coverId } = req.params
  const cover = await Cover.findOne({ _id: coverId })

  if (!cover) {
    throw new NotFoundError(`There is not a cover with id ${coverId}`)
  }

  const secureURL = cover.image.src
  await deleteFileInTheCloud(secureURL)
  await Cover.deleteOne({ _id: coverId })

  res.status(StatusCodes.OK).json({})
}

const updateCover = async (req, res, _next) => {
  const { id: coverId } = req.params
  const cover = await Cover.findOne({ _id: coverId })

  if (!cover) {
    throw new NotFoundError(`There is not a cover with id ${coverId}`)
  }

  if (req.file) {
    const secureURL = cover.image.src
    const { buffer } = req.file

    cover.set({
      image: {
        src: await updateFileInTheCloud(secureURL, buffer)
      }
    })
  }

  cover.set({ ...req.body })
  cover.save({ runValidators: true })

  res.status(StatusCodes.OK).json({})
}

export {
  getAllCovers,
  createCover,
  getCover,
  deleteCover,
  updateCover
}
