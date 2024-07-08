"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product-card";
import { ProductAPIService } from "@/services/products/products-api-services";
import { useEffect, useState } from "react";
import { GetProductSuccessData } from "@/types/services/product";
import { BarLoader } from "react-spinners";
import SearchNavbar from "@/components/navbar/search-navbar";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const llm = !!searchParams.get("llm") || false;

  const [products, setProducts] = useState<GetProductSuccessData[]>();
  const [loading, setLoading] = useState(true);

  const getSearchLLMProducts = async () => {
    setProducts([]);
    try {
      const getProducts = await ProductAPIService.searchLLMProducts(query);
      if (getProducts) {
        const searchResults = getProducts.data;
        setProducts(searchResults);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getSearchProducts = async () => {
    setProducts([]);
    try {
      const getProducts = await ProductAPIService.getProducts({
        query: query,
      });
      if (getProducts) {
        const searchResults = getProducts.data;
        setProducts(searchResults);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (llm) {
      void getSearchLLMProducts();
      return;
    }
    void getSearchProducts();
  }, [llm]);

  return (
    <>
      <NavBar />

      <SearchNavbar searchQuery={decodeURI(query)} />
      <ItemNavbar />

      <div className={"container mx-auto my-4"}>
        {loading && (
          <div
            className={
              "my-[200px] w-fit mx-auto flex flex-col items-center gap-10"
            }
          >
            <BarLoader />
            <p>
              {llm
                ? "Hold on! We're using AI to find just what you need"
                : "Loading products..."}
            </p>
          </div>
        )}

        {!loading && products && products.length === 0 && (
          <div
            className={
              "my-[200px] w-fit mx-auto flex flex-col items-center gap-10"
            }
          >
            <p>No products found for &quot;{query}&quot;</p>
          </div>
        )}

        <div className={"grid md:grid-cols-5 col-span-4 gap-2"}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
