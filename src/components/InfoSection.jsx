import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UpdatePasswordModal from "./updatePasswordModal";

const InfoSection = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [phone, setPhone] = useState(userInfo.phone);
  const [name, setName] = useState(userInfo.name);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState(userInfo.email);

  return (
    <>
      <div className="px-2">
        <form>
          <div className="mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <PhoneInput
              className="mt-1 block w-1/3 px-3 py-2 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
              placeholder=""
              country="MY"
              value={phone}
              onChange={setPhone}
              name="phone"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
      <div className="px-2">
        <form>
          <div className="mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="flex gap-8 items-center">
                <input
                  type="email"
                  className="mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex gap-8 items-center">
                <input
                  type="password"
                  className="mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="********"
                  readOnly
                />
                <div
                  onClick={() => setIsOpen(true)}
                  className="text-sm text-gray-400 hover:text-gray-700 underline cursor-pointer"
                >
                  Edit
                </div>
              </div>
            </div>
          </div>
        </form>
        <UpdatePasswordModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default InfoSection;
