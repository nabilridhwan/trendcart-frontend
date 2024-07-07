import { GetProductSuccessData } from "@/types/services/product";

export const getPopularItems = (products: GetProductSuccessData[]) => {
  const popularProducts: GetProductSuccessData[] = [];
  products.forEach((product: GetProductSuccessData) => {
    const averageRating =
      product?.Reviews?.reduce(
        (previousValue, currentValue) => previousValue + currentValue.rating,
        0
      ) / product?.Reviews?.length;

    if (averageRating <= 5 && averageRating >= 3) {
      popularProducts.push(product);
    }
  });
  return popularProducts;
};
