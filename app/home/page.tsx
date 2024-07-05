"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import Carousel from "@/components/home-carousel/home-carousel";
import { ItemSection } from "@/components/item-section/item-section";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <ItemNavbar />
      <Carousel />

      <ItemSection
        sectionTitle={"Price Deals"}
        fromColor={"from-pink-500"}
        toColor={"to-pink-100"}
      />

      <ItemSection
        sectionTitle={"Flash Sale"}
        fromColor={"from-green-300"}
        toColor={"to-indigo-200"}
      />
      <Footer/>
    </>
  );
}
