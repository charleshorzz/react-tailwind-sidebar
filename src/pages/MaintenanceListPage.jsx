import React from "react";
import carBg from "../assets/carBg.png";
import carModel from "../assets/carList.png";

const MaintenanceListPage = () => {
  return (
    <>
      <div className="flex flex-row gap-4 font-alata">
        <div className="w-[60.2%] relative ">
          <img src={carBg} alt="carBg" />
          <img
            src={carModel}
            alt="carModel"
            className="absolute top-[27%] left-[40%] w-48 h-96"
          />

          <div className="absolute top-[35%] left-[20%]">
            <div className="w-[3.5rem] h-[3.5rem] p-2 bg-gradient-to-b from-[#00A19B] to-[#003B39] rounded-full flex items-center justify-center text-white">
              35psi
            </div>
            <div className="text-white text-xs mt-1 pr-4">L.FRONT TIRE</div>
          </div>
          <div className="absolute top-[39%] left-[27%] w-[7rem] h-[0.175rem] bg-gradient-to-r from-[#003B39] to-[#00A19B] "></div>

          <div className="absolute top-[35%] right-[17%]">
            <div className="w-[3.5rem] h-[3.5rem] p-2 bg-gradient-to-b from-[#00A19B] to-[#003B39] rounded-full flex items-center justify-center text-white">
              33psi
            </div>
            <div className="text-white text-xs mt-1 pr-4">R.FRONT TIRE</div>
          </div>
          <div className="absolute top-[39%] right-[28%] w-[7rem] h-[0.175rem] bg-gradient-to-l from-[#003B39] to-[#00A19B] "></div>

          <div className="absolute top-[60%] left-[20%]">
            <div className="w-[3.5rem] h-[3.5rem] p-2 bg-gradient-to-b from-[#00A19B] to-[#003B39] rounded-full flex items-center justify-center text-white">
              29psi
            </div>
            <div className="text-white text-xs mt-1 pr-4">L.REAR TIRE</div>
          </div>
          <div className="absolute top-[63.5%] left-[27%] w-[7rem] h-[0.175rem] bg-gradient-to-r from-[#003B39] to-[#00A19B] "></div>

          <div className="absolute top-[60%] right-[18%]">
            <div className="w-[3.5rem] h-[3.5rem] p-2 bg-gradient-to-b from-[#00A19B] to-[#003B39] rounded-full flex items-center justify-center text-white">
              31psi
            </div>
            <div className="text-white text-xs mt-1 pr-4">R.REAR TIRE</div>
          </div>
          <div className="absolute top-[63.5%] right-[28%] w-[7rem] h-[0.175rem] bg-gradient-to-l from-[#003B39] to-[#00A19B] "></div>
        </div>

        <div className="p-8">
          <div className="text-2xl font-semibold ">Specs</div>
        </div>
      </div>
    </>
  );
};

export default MaintenanceListPage;
