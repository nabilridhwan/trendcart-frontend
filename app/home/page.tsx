"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import Carousel from "@/components/home-carousel/home-carousel";


export default function Home() {
    return (
        <>
            <>
                <NavBar/>
                <ItemNavbar/>
            </>
            <Carousel/>
        </>
    )
}