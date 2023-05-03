import connectDB from '../db/connect.js'
import Cover from '../models/Cover.js'

import jsonCovers from './covers.json' assert { type: "json" }


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Cover.deleteMany()
    await Cover.create(jsonCovers)
    
    console.log('Success')
    process.exit(0)
  } catch (error) {
    console.log('Save data failed', { cause: error })
    process.exit(1)
  }
}

start()
