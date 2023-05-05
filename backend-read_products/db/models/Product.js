import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { typeof: String },
  description: { typeof: String },
  price: { typeof: Number },
  currency: { typeof: String },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
