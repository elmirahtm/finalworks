import Card4 from "@/components/Card4";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderRoutes from "@/components/HeaderRoutes";
import React from "react";

const Cards = () => {
  return (
    <div>
      <Header />
      <HeaderRoutes />
      <div>
        <Card4 />
      </div>

      <div className="mt-64">
        <Footer />
      </div>
    </div>
  );
};

export default Cards;
