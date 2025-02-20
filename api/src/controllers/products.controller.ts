import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/responses.js";

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, [], 200, "Get all products");
};

export const getProduct = (req: Request, res: Response, next: NextFunction) => {
  successResponse(res, {}, 200, "Get a product");
};

export const createProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, {}, 201, "Create a product");
};

export const updateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, {}, 200, "Update a product");
};

export const deleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  successResponse(res, {}, 200, "Delete a product");
};
