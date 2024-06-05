import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePicker from "tailwind-datepicker-react";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showServiceTypeDropdown, setShowServiceTypeDropdown] = useState(false);
  const [showServiceCenterDropdown, setShowServiceCenterDropdown] =
    useState(false);
  const [selectedServiceType, setSelectedServiceType] =
    useState("Major Service");
  const [selectedServiceCenter, setSelectedServiceCenter] =
    useState("BR Jaya SDN BHD");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date); // Log the selected date
  };

  const handleShowDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleServiceTypeDropdownClick = () => {
    setShowServiceTypeDropdown(!showServiceTypeDropdown);
    setShowServiceCenterDropdown(false); // Close the service center dropdown
  };

  const handleServiceCenterDropdownClick = () => {
    setShowServiceCenterDropdown(!showServiceCenterDropdown);
    setShowServiceTypeDropdown(false); // Close the service type dropdown
  };

  const handleServiceTypeSelect = (serviceType) => {
    setSelectedServiceType(serviceType);
    setShowServiceTypeDropdown(false);
  };

  const handleServiceCenterSelect = (serviceCenter) => {
    setSelectedServiceCenter(serviceCenter);
    setShowServiceCenterDropdown(false);
  };

  const renderTimeSlots = () => {
    const rows = [];
    let baseTime = new Date();
    baseTime.setHours(8, 0, 0, 0); // Set base time to 8:00 AM
    const [selectedButton, setSelectedButton] = useState(null);

    const isAvailable = (time) => {
      // Example availability condition, you can replace it with your own logic
      return time.getHours() >= 10 && time.getHours() <= 17;
    };

    const handleClick = (index, time) => {
      setSelectedButton(index);
      console.log(
        time.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    for (let i = 0; i < 4; i++) {
      const buttons = [];
      let startTime = new Date(baseTime.getTime() + i * 3 * 60 * 60 * 1000); // Increment base time by 3 hours
      for (let j = 0; j < 7; j++) {
        const time = new Date(startTime.getTime() + j * 30 * 60 * 1000); // Increment time by 30 minutes
        const index = i * 7 + j;
        buttons.push(
          <button
            key={`button-${i}-${j}`}
            className={`rounded-full border w-24 h-14 shadow-lg mx-2.5 mb-3 ${
              selectedButton === index
                ? "bg-[#00A19B]"
                : isAvailable(time)
                ? "bg-[#9FD4D2] text-black"
                : "bg-[#757575] text-white"
            }`}
            onClick={() => handleClick(index, time)}
          >
            {time.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </button>
        );
      }
      rows.push(
        <div key={`row-${i}`} className="flex flex-row">
          {buttons}
        </div>
      );
    }
    return rows;
  };

  const isAvailable = (time) => {
    // Example availability condition, you can replace it with your own logic
    return time.getHours() >= 10 && time.getHours() <= 17;
  };

  return (
    <div className="p-16 flex flex-row gap-12  h-full font-alata">
      <div className="flex flex-col mt-10">
        <div className="text-lg text-[#858585]">Vehicle</div>
        <div className="flex flex-row items-center">
          <div className="font-semibold text-3xl mt-1">SL63 AMG</div>
          <div className="px-8 font-extrabold text-4xl">
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="font-semibold text-lg">AMG 8904</div>
        <div className="flex relative mt-6 w-[18rem] bg-gray-100">
          <DatePicker
            onChange={handleDateChange}
            show={showDatePicker}
            setShow={handleShowDatePicker}
            className="bg-gray-100 w-full rounded p-2"
          />
        </div>
        <div
          className="relative mt-7 text-gray-700 bg-[#EEEEEE] shadow-md bg-clip-border rounded-xl w-[18rem] cursor-pointer"
          onClick={handleServiceTypeDropdownClick}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <label>Service Type</label>
                <div className="pt-1 text-black font-semibold text-lg">
                  {selectedServiceType}
                </div>
              </div>
              <MdKeyboardArrowDown
                size={30}
                className={`transform transition-transform duration-300 ${
                  showServiceTypeDropdown ? "rotate-180" : ""
                }`}
              />
            </div>
            {showServiceTypeDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-400 rounded-md shadow-lg left-0">
                <div
                  className="block px-4 py-2 cursor-pointer hover:bg-gray-200 dark:bg-dark-2"
                  onClick={() => handleServiceTypeSelect("Major Service")}
                >
                  Major Service
                </div>
                <div
                  className="block px-4 py-2 cursor-pointer hover:bg-gray-200 dark:bg-dark-2"
                  onClick={() => handleServiceTypeSelect("Regular Service")}
                >
                  Regular Service
                </div>
                <div
                  className="block px-4 py-2 cursor-pointer hover:bg-gray-200 dark:bg-dark-2"
                  onClick={() => handleServiceTypeSelect("Checking")}
                >
                  Checking
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="relative mt-7 text-gray-700 bg-[#EEEEEE] shadow-md bg-clip-border rounded-xl w-[18rem] cursor-pointer"
          onClick={handleServiceCenterDropdownClick}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <label>Service Center</label>
                <div className="pt-1 text-black font-semibold text-lg">
                  {selectedServiceCenter}
                </div>
              </div>
              <MdKeyboardArrowDown
                size={30}
                className={`transform transition-transform duration-300 ${
                  showServiceCenterDropdown ? "rotate-180" : ""
                }`}
              />
            </div>
            {showServiceCenterDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-400 rounded-md shadow-lg left-0">
                <div
                  className="block px-4 py-2 cursor-pointer hover:bg-gray-200 dark:bg-dark-2"
                  onClick={() => handleServiceCenterSelect("BR Jaya SDN BHD")}
                >
                  BR Jaya SDN BHD
                </div>
                <div
                  className="block px-4 py-2 cursor-pointer hover:bg-gray-200 dark:bg-dark-2"
                  onClick={() =>
                    handleServiceCenterSelect("Hap Seng Star Kinrara")
                  }
                >
                  Hap Seng Star Kinrara
                </div>
                <div
                  className="block px-4 py-2 cursor-pointer hover:bg-gray-200 dark:bg-dark-2"
                  onClick={() =>
                    handleServiceCenterSelect("Mercedes Workshop Malaysia")
                  }
                >
                  Mercedes Workshop Malaysia
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative mt-10 text-gray-700 bg-[#EEEEEE] shadow-md bg-clip-border rounded-xl w-2/3 h-[80%] cursor-pointer ">
        <div className="p-6">
          <p className="font-semibold mb-4">Time Slot</p>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center gap-2 pr-2">
              <div className="rounded-full border bg-[#757575] w-4 h-4 shadow-lg"></div>
              <p className="font-semibold text-sm leading-relaxed text-[#858585]">
                Unavailable
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 px-2">
              <div className="rounded-full border bg-[#9FD4D2] w-4 h-4 shadow-lg"></div>
              <p className="font-semibold text-sm leading-relaxed text-[#858585]">
                Available
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 px-2">
              <div className="rounded-full border bg-[#00A19B] w-4 h-4 shadow-lg"></div>
              <p className="font-semibold text-sm leading-relaxed text-[#858585] whitespace-nowrap">
                Time Chosen
              </p>
            </div>
          </div>
          <div className="w-full h-full mt-4">
            {renderTimeSlots()}
            <button className="bg-[#00A19B] border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#006E6A] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 mt-6 mx-[16rem] w-[20rem]">
              Make Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
