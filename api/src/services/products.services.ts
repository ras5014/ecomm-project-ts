import { prisma } from "../lib/prisma";

type Product = {
  name: String;
  description: String;
  price: Number;
};

export const createProduct = async ({ name, description, price }: Product) => {
  const product = await prisma.products.create({
    data: {
      name,
      description,
      price,
    },
  });
};

export const getProducts = async () => {
  return await prisma.products.findMany();
};
