"use client";
import Header from "@/components/Header";
import HeaderRoutes from "@/components/HeaderRoutes";
import Carousel from "@/components/Carousel";
import MainPage from "@/components/MainPage";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderRoutes />
      <Carousel />
      <MainPage />
    </div>
  );
};

export default Home;
