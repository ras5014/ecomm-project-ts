import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/responses.js";
import { createProduct } from "../services/products.services.js";

export const getProductsController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, [], 200, "Get all products");
};

export const getProductController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, {}, 200, "Get a product");
};

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await createProduct(req.body);
    successResponse(res, product, 201, "product created");
  } catch (error) {
    next(error);
  }
};

export const updateProductController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, {}, 200, "Update a product");
};

export const deleteProductController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, {}, 200, "Delete a product");
};
