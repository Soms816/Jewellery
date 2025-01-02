import React from "react";
import BigSlider from "./comp/bigSlider";
import LivePrices from "./comp/livePrices";
import CategoryListing from "./comp/CategoryListing";
import JewelryCategories from "./comp/JewelryCategories";

const page = () => {
  return (
    <div className="bg-Purple-400">
      <BigSlider />
      <LivePrices />
      <CategoryListing />
      <JewelryCategories />
    </div>
  );
};

export default page;
