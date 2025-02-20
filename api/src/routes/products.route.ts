import express from "express";

// Import Controllers
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = express.Router();

router
  .get("/", getProducts)
  .get("/:id", getProduct)
  .post("/", createProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default router;
