import React from "react";
import Delete from "../assets/delete.png";

const VehicleCard = ({ imgSrc, children }) => {
  return (
    <div className="relative w-[20rem] h-[19rem] border border-gray-100 rounded-2xl shadow-lg group hover:border-gray-300">
      <div className="w-[18rem] h-[11rem] pt-4 mx-5 flex justify-center">
        <img
          src={imgSrc}
          alt="vehicle"
          className="transition-transform group-hover:scale-110 duration-200 bg-cover"
        />
        <img
          src={Delete}
          alt="deleteBtn"
          className="absolute top-4 right-4 w-5 h-5 z-3 cursor-pointer"
        />
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="p-4 text-black text-center">{children}</div>
      </div>
    </div>
  );
};

export default VehicleCard;
