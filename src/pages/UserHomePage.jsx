import React from "react";
import Model from "../components/3d-Components/Model.jsx";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import repairImg from "../assets/repair.png";
import timingImg from "../assets/timing.png";
import customerImg from "../assets/customer.png";
import profilePic from "../assets/jj-pfp.jpg";

const UserHomePage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-row antialiased font-alata">
      <div className="px-16 pt-[3rem] w-full flex flex-col">
        <div className="flex flex-row">
          <div className="pr-5">
            <img
              src={profilePic}
              alt="profile pic"
              className="rounded-full w-[3.5rem] h-[3.5rem]"
            ></img>
          </div>
          <div>
            <div className="font-bold text-xl">Good Day, {userInfo.name}</div>
            <div className="font-light text-[#858585]">
              Mersedes-Benz SL63 AMG
            </div>
          </div>
        </div>
        <div className="mt-12 text-lg text-[#858585]">Vehicle</div>
        <div
          className="flex flex-row items-center
        "
        >
          <div className="font-semibold text-3xl mt-1">SL63 AMG</div>
          <div className="px-8 font-extrabold text-4xl">
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="font-semibold text-lg">AMG 8904</div>

        <div className="flex flex-row gap-8">
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[18rem]">
            <div class="p-8">
              <img
                src={repairImg}
                alt="repair"
                className="w-12 h-12 mb-4 text-gray-900"
              ></img>
              <h5 class="block mb-1  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                20 MAY 2024
              </h5>
              <p class="block  text-base antialiased text-[#858585] leading-relaxed text-inherit">
                Next Service Date
              </p>
            </div>
          </div>

          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[18rem] ">
            <div class="p-8">
              <img
                src={timingImg}
                alt="repair"
                className="w-12 h-12 mb-4 text-gray-900"
              ></img>
              <h5 class="block mb-1 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                52000 km
              </h5>
              <p class="block text-base antialiased text-[#858585] leading-relaxed text-inherit">
                Next Service Mileage
              </p>
            </div>
          </div>
        </div>

        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[38rem]">
          <div class="p-8">
            <img
              src={customerImg}
              alt="repair"
              className="w-12 h-12 mb-4 text-gray-900"
            ></img>
            <h5 class="block mb-1  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Roadside Assistance
            </h5>
            <p class="block  text-base antialiased text-[#858585] leading-relaxed text-inherit">
              We are ready to assist you
            </p>
          </div>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default UserHomePage;
