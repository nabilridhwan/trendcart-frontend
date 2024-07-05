"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import { ItemSection } from "@/components/item-section/item-section";
import Footer from "@/components/footer/footer";

export default function ForYouPage() {
  return (
    <>
      <NavBar />
      <ItemNavbar />

      <ItemSection
        sectionTitle={"Daily trendy picks"}
        fromColor={"from-purple-300"}
        toColor={"to-pink-300"}
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
      <Footer/>
    </>
  );
}
