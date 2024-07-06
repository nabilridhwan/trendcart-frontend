"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import Carousel from "@/components/home-carousel/home-carousel";
import { ItemSection } from "@/components/item-section/item-section";
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";
import { ProductAPIService } from "@/services/products/products-api-services";

export default function Home() {
  const [priceDealProducts, setPriceDealProducts] = useState<any[]>([]);

  const getPriceDeals = async () => {
    try {
      const getProducts = await ProductAPIService.getProducts({
        price_low: 20,
      });
      const topTwelveDeals = getProducts.slice(0, 12); // Ensure we only take up to 12 products
      setPriceDealProducts(topTwelveDeals);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error (e.g., show an error message)
    }
  };

  useEffect(() => {
    getPriceDeals();
  }, []);

  return (
    <>
      <NavBar />
      <ItemNavbar />
      <Carousel />
      <ItemSection
        sectionTitle={"Price Deals"}
        fromColor={"from-pink-500"}
        toColor={"to-pink-100"}
        items={priceDealProducts}
      />
      <ItemSection
        sectionTitle={"Flash Sale"}
        fromColor={"from-green-300"}
        toColor={"to-indigo-200"}
        items={[]} // Placeholder for Flash Sale items
      />
      <Footer />
    </>
  );
}
