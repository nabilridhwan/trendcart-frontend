"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import { ItemSection } from "@/components/item-section/item-section";
import Footer from "@/components/footer/footer";
import { ProductAPIService } from "@/services/products/products-api-services";
import { useEffect, useState } from "react";
import { GetProductSuccessData } from "@/types/services/product";
import SearchNavbar from "@/components/navbar/search-navbar";

export default function ForYouPage() {
  const [dailyPicks, setDailyPicks] = useState<GetProductSuccessData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasForYouContent, setHasForYouContent] = useState<boolean>(true);

  const getPopularProducts = async () => {
    try {
      const getProducts = await ProductAPIService.getProducts();
      if (getProducts) {
        const slicedData = getProducts.data.slice(0, 6);
        setDailyPicks(slicedData);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching popular products:", error);
    }
  };

  const getDailyPickProducts = async () => {
    try {
      const getProducts = await ProductAPIService.getForYouRecommendations();
      if (getProducts) {
        setDailyPicks(getProducts.data);
        setIsLoading(false);
      }
    } catch (error) {
      setHasForYouContent(false);
      console.error("Error fetching for you recommendations products:", error);

      getPopularProducts();
    }
  };

  useEffect(() => {
    getDailyPickProducts();
  }, []);

  return (
    <>
      <NavBar />
      <SearchNavbar />
      <ItemNavbar />

      {isLoading && (
        <div className="min-h-screen flex items-center justify-center bg-[#001F3E] text-white">
          <div className="flex flex-col items-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-[#f60457] h-12 w-12 mb-4"></div>
            <h2 className="text-xl">Loading recommendations for you...</h2>
          </div>
        </div>
      )}

      {dailyPicks && (
        <ItemSection
          sectionTitle={"We think you'll love these!"}
          fromColor={"from-purple-300"}
          toColor={"to-pink-300"}
          items={dailyPicks}
        />
      )}

      {!hasForYouContent && (
        <p className={"text-center my-5 italic"}>
          We&apos;re sorry, we couldn&apos;t find any recommendations for you.
          Here are some popular products instead. We&apos;ll recommend products
          once you view more items.
        </p>
      )}

      <Footer />
    </>
  );
}
