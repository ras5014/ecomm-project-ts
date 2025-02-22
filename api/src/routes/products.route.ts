import express from "express";

// Import Controllers
import {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/products.controller.js";
import { validate } from "../middlewares/validate.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/products.schema";

const router = express.Router();

router
  .get("/", getProductsController)
  .get("/:id", getProductController)
  .post("/", validate(createProductSchema), createProductController)
  .put("/:id", updateProductController)
  .delete("/:id", deleteProductController);

export default router;
