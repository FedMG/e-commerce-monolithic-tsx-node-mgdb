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
  'converse'
]

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided']
  },
  image: {
    src: {
      type: String,
      required: true
    }
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
    type: Number
  },
  rating: {
    stars: {
      type: Number,
      default: 4
    },
    votes: {
      type: Number,
      default: 105,
    }
  },
  description: {
    introduction: {
      type: String,
      required: [true, 'introduction of description must be provided']
    },
    body: {
      type: String,
      required: [true, 'body of description must be provided']
    },
    conclusion: {
      type: String,
      required: [true, 'conclusion of description must be provided']
    }
  },
  colors: {
    type: [String],
    required: [true, 'product colors must be provided']
  },
  sizes: {
    type: [String],
    required: [true, 'product sizes must be provided']
  },
  stock: {
    type: Number,
    default: 104,
    required: [true, 'product stock must be provided']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Product', productSchema)
