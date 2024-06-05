import React, { useState } from "react";
import { toast } from "react-toastify";

const FeedbackSection = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("😃");

  const handleSubmit = () => {
    toast.success("Feedback submitted successfully");
  };

  return (
    <>
      <div className="w-full">
        <div className="py-3 px-5">
          <i className="fas fa-times cursor-pointer text-gray-400 text-xl absolute top-5 right-5"></i>
          <div className="text-center text-xl font-bold text-gray-900">
            How was your experience in Mercedes-CARE today?
          </div>
          <ul className="flex gap-7 justify-center my-5">
            <li
              className={`cursor-pointer w-20 h-20 bg-white transition duration-300 rounded-lg flex justify-center items-center text-5xl ${
                selectedEmoji === "🙁" ? "shadow-lg" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedEmoji("🙁")}
            >
              🙁
            </li>
            <li
              className={`cursor-pointer w-20 h-20 bg-white transition duration-300 rounded-lg flex justify-center items-center text-5xl ${
                selectedEmoji === "😐" ? "shadow-lg" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedEmoji("😐")}
            >
              😐
            </li>
            <li
              className={`cursor-pointer w-20 h-20 bg-white transition duration-300 rounded-lg flex justify-center items-center text-5xl ${
                selectedEmoji === "😃" ? "shadow-lg" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedEmoji("😃")}
            >
              😃
            </li>
          </ul>
        </div>
        <div className="px-5 flex gap-8 w-full">
          <div>
            <label className="block font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="mt-1 block w-[40rem] px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="The staff is friendly..."
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Attachment
            </label>
            <div className="relative">
              <label
                htmlFor="file"
                className="flex w-[26rem] cursor-pointer items-center justify-center border border-gray-300 rounded-md shadow-sm px-4 py-3 mt-1"
              >
                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="sr-only"
                  />
                  <div className="flex items-center gap-6">
                    <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border border-stroke bg-white">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.5013 11.666C2.96154 11.666 3.33464 12.0391 3.33464 12.4993V15.8327C3.33464 16.0537 3.42243 16.2657 3.57871 16.4219C3.73499 16.5782 3.94695 16.666 4.16797 16.666H15.8346C16.0556 16.666 16.2676 16.5782 16.4239 16.4219C16.5802 16.2657 16.668 16.0537 16.668 15.8327V12.4993C16.668 12.0391 17.0411 11.666 17.5013 11.666C17.9615 11.666 18.3346 12.0391 18.3346 12.4993V15.8327C18.3346 16.4957 18.0712 17.1316 17.6024 17.6004C17.1336 18.0693 16.4977 18.3327 15.8346 18.3327H4.16797C3.50493 18.3327 2.86904 18.0693 2.4002 17.6004C1.93136 17.1316 1.66797 16.4957 1.66797 15.8327V12.4993C1.66797 12.0391 2.04106 11.666 2.5013 11.666Z"
                          fill="#3056D3"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.41074 1.91009C9.73618 1.58466 10.2638 1.58466 10.5893 1.91009L14.7559 6.07676C15.0814 6.4022 15.0814 6.92984 14.7559 7.25527C14.4305 7.58071 13.9028 7.58071 13.5774 7.25527L10 3.67786L6.42259 7.25527C6.09715 7.58071 5.56951 7.58071 5.24408 7.25527C4.91864 6.92984 4.91864 6.4022 5.24408 6.07676L9.41074 1.91009Z"
                          fill="#3056D3"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0013 1.66602C10.4615 1.66602 10.8346 2.03911 10.8346 2.49935V12.4994C10.8346 12.9596 10.4615 13.3327 10.0013 13.3327C9.54106 13.3327 9.16797 12.9596 9.16797 12.4994V2.49935C9.16797 2.03911 9.54106 1.66602 10.0013 1.66602Z"
                          fill="#3056D3"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-base text-body-color">
                      Drag &amp; drop or
                      <span className="text-primary underline"> browse </span>
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="px-5 mt-6">
          <label className="block font-medium text-gray-700">Content</label>
          <textarea
            rows="5"
            className="mt-1 block w-[68rem] h-48 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="They treated me politely..."
          />
        </div>
        <div className="w-full mx-[30rem] mt-4">
          <button
            className="border-secondary border rounded-md inline-flex bg-[#00A19B] items-center justify-center py-2 px-8 text-center text-base font-medium text-white hover:bg-[#006e4f] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 transition-all duration-150"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default FeedbackSection;
