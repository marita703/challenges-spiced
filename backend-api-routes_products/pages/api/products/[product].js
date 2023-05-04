import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  const id = req.query.product;

  const product = getProductById(id);

  if (product) {
    return res.status(200).json(product);
  }

  res.status(404).json({ status: "not found" });
}
