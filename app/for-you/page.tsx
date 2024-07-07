"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import { ItemSection } from "@/components/item-section/item-section";
import Footer from "@/components/footer/footer";
import { ProductAPIService } from "@/services/products/products-api-services";
import { useEffect, useState } from "react";
import { GetProductSuccessData } from "@/types/services/product";
import { getPopularItems } from "./helper";

export default function ForYouPage() {
  const [dailyPicks, setDailyPicks] = useState<GetProductSuccessData[]>();
  const getDailyPickProducts = async () => {
    try {
      const getProducts = await ProductAPIService.getProducts();
      if (getProducts) {
        const popularItems = getPopularItems(getProducts.data).slice(0, 6);
        console.log("popularItems:", popularItems);
        setDailyPicks(popularItems);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getDailyPickProducts();
  }, []);

  return (
    <>
      <NavBar />
      <ItemNavbar />

      <ItemSection
        sectionTitle={"Daily trendy picks"}
        fromColor={"from-purple-300"}
        toColor={"to-pink-300"}
        items={dailyPicks}
      />

      <ItemSection
        sectionTitle={"Continue searching"}
        fromColor={"from-pink-500"}
        toColor={"to-blue-100"}
      />

      <ItemSection
        sectionTitle={"From your favourite brands!"}
        fromColor={"from-green-200"}
        toColor={"to-blue-300"}
      />

      <ItemSection
        sectionTitle={"Products for your wallet"}
        fromColor={"from-yellow-500"}
        toColor={"to-orange-300"}
      />
      <Footer />
    </>
  );
}
