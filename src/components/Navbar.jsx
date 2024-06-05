import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { RiAddBoxLine } from "react-icons/ri";
import { SiMercedes } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { IoHome } from "react-icons/io5";
import { IoIosCalendar, IoMdSettings } from "react-icons/io";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";

const Navbar = () => {
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const location = useLocation(); // Use useLocation hook to get the current location

  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };

  const active = {
    backgroundColor: "rgba(0, 161, 155, 0.35)", // 0.35 opacity
  };

  const menus = userInfo
    ? [
        { name: "Home", link: "/userHomePage", icon: IoHome },
        { name: "Notifications", link: "/notifications", icon: FaEnvelope },
        {
          name: "Book Appointment",
          link: "/booking",
          icon: RiAddBoxLine,
        },
        { name: "Maintenance List", link: "/list", icon: FaClipboardList },
        { name: "Settings", link: "/settings", icon: IoMdSettings },
        {
          name: "Logout",
          icon: BiLogOut,
          logOutFunction: true,
          margin: true,
        },
      ]
    : [
        { name: "Home", link: "/", icon: IoHome, marginLogin: true },
        { name: "Notifications", link: "/notifications", icon: FaEnvelope },
        { name: "Log in", link: "/login", icon: RiLoginBoxLine },
      ];

  const [open, setOpen] = useState(false);

  return (
    <section className="flex gap-6 relative z-20">
      <div
        className={`bg-[white] min-h-screen ${
          open ? "w-72" : "w-20"
        } duration-500 text-black px-[1.25rem]`}
      >
        <div className="py-3 mt-16 flex justify-center">
          <NavLink to={`${userInfo ? "/userHomePage" : "/"}`}>
            <SiMercedes size={30} />
          </NavLink>
        </div>
        <div className="mt-24 flex flex-col gap-4 relative justify-center">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              onClick={() => menu.logOutFunction && logoutHandler()}
              className={` ${
                menu?.margin && "mt-44"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#00A19B] hover:bg-opacity-35  rounded-md`}
              activeclassname="active" // Apply this class when the link is active
              style={location.pathname === menu.link ? active : {}} // Apply this class when the link is active
            >
              <div>{React.createElement(menu?.icon, { size: "23" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 z-20 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
