import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.find();
    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }
    return response.status(200).json(product);
  }
}
