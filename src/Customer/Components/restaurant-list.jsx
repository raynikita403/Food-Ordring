import React from "react";
import CommonCard from "./common-card";

import restaurants from "../../data/restaurant-list.json";

import bg1 from "../../assets/resto1.jpg";
import bg2 from "../../assets/resto2.jpg";
import bg3 from "../../assets/resto3.avif";
import bg4 from "../../assets/resto4.avif"
import bg5 from "../../assets/resto5.avif"
import bg6 from "../../assets/resto6.avif"
import bg7 from "../../assets/resto7.avif"
import bg8 from "../../assets/resto8.avif"
const bgMap = {
  "resto1.jpg": bg1,
  "resto2.jpg": bg2,
  "resto3.avif": bg3,
  "resto4.avif": bg4,
  "resto5.avif": bg5,
  "resto6.avif": bg6,
  "resto7.avif": bg7,
   "resto8.avif": bg8,
};

const RestaurantsSection = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Popular Restaurants Near You</h2>

      <div className="row g-4 justify-content-center">
        {restaurants.map((item) => (
          <div key={item.id} className="col-12 col-md-3 col-lg-3">
            <CommonCard
              title={item.title}
              desc={item.desc}
              bg={bgMap[item.bg]}
              showOverlay={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsSection;
