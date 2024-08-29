import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

import { Header } from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import PromoFigure from "@/components/PromoFigure";
import PopularCars from "@/components/PopularCars";

import SubscribeSection from "@/components/SubscribeSection";
import RentLease from "@/components/RentLease";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BookingSection />
        <PromoFigure />
        <PopularCars />
        <SubscribeSection />
        <RentLease />
        <Locations />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
