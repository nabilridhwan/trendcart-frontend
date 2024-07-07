"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product-card";
import { ProductAPIService } from "@/services/products/products-api-services";
import { useEffect, useState } from "react";
import { GetProductSuccessData } from "@/types/services/product";

export default function ProductListingPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<GetProductSuccessData[]>();

  const getSearchProducts = async () => {
    try {
      const getProducts = await ProductAPIService.getProducts({
        query: query,
      });
      if (getProducts) {
        const searchResults = getProducts.data;
        setProducts(searchResults);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getSearchProducts();
  }, []);

  return (
    <>
      <NavBar searchQuery={decodeURI(query)} />
      <ItemNavbar />

      <div className={"container mx-auto my-4"}>
        <div className={"grid grid-cols-5 col-span-4 gap-2"}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
