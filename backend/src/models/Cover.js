import mongoose from 'mongoose'

const coverSchema = new mongoose.Schema({
  image: {
    src: {
      type: String,
      required: [true, 'image must be provided']
    }
  },
  brand: {
    type: String,
  },
  alt: {
    type: String,
    required: [true, 'alt must be provided']
  },
  category: {
    type: String,
    enum: {
      values: [
        'beauty',
        "men's clothing",
        "women's clothing",
        'accessory',
        'shoes'
      ],
      message: '{VALUE} is not supported'
    },
    required: [true, 'category must be provided']
  },
  discount: {
    type: Number,
    required: [true, 'discount must be provided']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Cover', coverSchema)
