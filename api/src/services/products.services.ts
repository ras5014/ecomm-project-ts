import { prisma } from "../lib/prisma";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "../schemas/products.schema";

export const createProduct = async (data: CreateProductSchema) => {
  const { name, description, price } = data;
  const product = await prisma.products.create({
    data: {
      name,
      description,
      price,
    },
  });
  return product;
};

export const getProducts = async () => {
  return await prisma.products.findMany();
};

export const getProductById = async (id: any) => {
  return await prisma.products.findUnique({
    where: {
      id,
    },
  });
};

export const updateProduct = async (id: string, data: UpdateProductSchema) => {
  const { name, description, price } = data;
  return await prisma.products.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      price,
    },
  });
};

export const deleteProduct = async (id: any) => {
  await prisma.products.delete({
    where: {
      id,
    },
  });
};
