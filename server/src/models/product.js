import mongoose from 'mongoose'

const brands = [
  'addidas',
  'nike',
  'toppler',
  'gucci',
  'zara',
  'calvin klein',
  'versace',
  'puma',
  'channel',
]

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided']
  },
  description: { type: String, },
  image: { 
  type: String,
  required: true
   },
  category: {
    type: String,
    enum: {
      values: ['beauty', "men's clothing", "women's clothing", 'accessory', 'shoes'],
      message: '{VALUE} is not supported'
    }
  },
  brand: {
    type: String,
    enum: {
      values: brands,
      message: '{VALUE} is not supported'
    }
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided']
  },
  discount: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 4
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Product', productSchema)
