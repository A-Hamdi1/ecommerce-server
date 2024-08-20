const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  ],
  cImage: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
