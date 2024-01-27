import React from "react";
import pvo from "../../assets/pvo.png";
import birdie from "../../assets/birdie.png";
import dhl from "../../assets/dhl.png";
import laka from "../../assets/laka.png";
import wagastream from "../../assets/wagastream.png";
import inflow from "../../assets/inflow.png";

const Brands = () => {
  const brands = [pvo, birdie, dhl, laka, wagastream, inflow];
  return (
    <div className="brand">
      <div className="container mx-auto">
        <div className="flex items-center gap-[69px] overflow-x-auto no-scrollbar">
          {brands.map((data, index) => (
            <img key={index} src={data.src} alt="brand" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
