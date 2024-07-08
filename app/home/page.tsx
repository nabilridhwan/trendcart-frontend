"use client";
import Footer from "@/components/footer/footer";
import Carousel from "@/components/home-carousel/home-carousel";
import { ItemSection } from "@/components/item-section/item-section";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import { ProductAPIService } from "@/services/products/products-api-services";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthContext";
import { redirect } from "next/navigation";

export default function Home() {
  const [priceDealProducts, setPriceDealProducts] = useState<any[]>([]);
  const { isLoggedIn } = useAuth();

  const getPriceDeals = async () => {
    try {
      const getProducts = await ProductAPIService.getProducts({
        price_low: 20,
      });
      if (getProducts) {
        const topTwelveDeals = getProducts.data.slice(0, 12); // Ensure we only take up to 12 products
        setPriceDealProducts(topTwelveDeals);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getPriceDeals();
  }, []);

  if (!isLoggedIn) {
    return redirect("/login");
  }
  // } else {
  //   return redirect("/home");
  // }

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
      <Footer />
    </>
  );
}
