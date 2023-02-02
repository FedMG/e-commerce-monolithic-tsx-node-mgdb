import mongoose from 'mongoose'

const brands = [
  'sony',
  'microsoft',
  'addidas',
  'nike',
  'wheerpool',
  'phillips',
  'sanyo',
  'asamblea',
  'barrok',
  'dolce & gabanna',
  'paco rabbane',
  'easy',
  'gucci',
  'lenovo',
  'luccetti',
  'potter-library'
]

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided']
  },
  category: {
    type: String,
    enum: {
      values: ['electronics', 'books', 'beauty', 'home', 'foods', "men's clothing", "women's clothing"],
      message: '{VALUE} is not supported'
    }
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided']
  },
  rating: {
    type: Number,
    default: 4
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  brand: {
    type: String,
    enum: {
      values: brands,
      message: '{VALUE} is not supported'
    }
  }
})

export default mongoose.model('Product', productSchema)
