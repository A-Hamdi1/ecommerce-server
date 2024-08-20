const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: false,
        trim: true,
      },
      type: {
        type: String,
        enum: ['variable', 'single'],
        required: true,
      },
      pImage: {
        type: String, 
        required: true,
      },
      images: [{
        type: String,
        required: false,
      }],
      color: {
        type: String,
        required: false,
      },
      size: {
        type: String,
        required: false,
      },
      price: {
        type: Number,
        required: true,
      },
      discountedPrice: {
        type: Number,
        required: false,
      },
      stock: {
        type: Number,
        required: true,
        default: 0,
      },
      status: {
        type: String,
        enum: ['In Stock', 'Out Of Stock', 'On Order'],
        required: true,
        default: 'in stock',
      },
      brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
      pRatingsReviews: [
        {
          review: String,
          user: { type: ObjectId, ref: "User" },
          rating: String,
          createdAt: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      active: {
        type: Boolean,
        default: true,
      },
    })

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
