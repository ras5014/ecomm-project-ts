import { View, Text, FlatList } from "react-native";
import React from "react";
import products from "../assets/products.json";
import { ProductList } from "@/components/custom/ProductList";

export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => (
        <ProductList product={item} />
      )}
    />
  );
}
