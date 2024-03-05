import React, { useState } from "react";
import Link from "next/link";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import NotificationBox from "../layout/NotificationBox";

const CustomNavBar = () => {
  const [isNotificationBoxOpen, setIsNotificationBoxOpen] = useState(false);
  return (
    <ResponsiveLayout>
      {isNotificationBoxOpen && <NotificationBox />}
      <nav className="flex bg-gray-800 p-4 z-50 gap-4">
        <Link
          href="/searchBloodBank"
          className="text-white hover:bg-gray-600 px-3 py-2 cursor-pointer rounded"
        >
          searchBB
        </Link>
        <Link
          href="/searchCamps"
          className="text-white hover:bg-gray-600 px-3 py-2 rounded"
        >
          searchC
        </Link>
        <Link
          href="/profile"
          className="text-white hover:bg-gray-600 px-3 py-2 rounded"
        >
          Profile
        </Link>
        <Link
          href="/dashboard"
          className="text-white hover:bg-gray-600 px-3 py-2 rounded"
        >
          DashBoard
        </Link>
        <Link
          href="/login"
          className="text-white hover:bg-gray-600 px-3 py-2 rounded"
        >
          Login
        </Link>
        <div
          onClick={() => setIsNotificationBoxOpen((prev) => !prev)}
          class="self-center ext-text-secondary dark:text-text-secondary hover:bg-fill-3 dark:hover:bg-dark-fill-3 rounded w-8 h-8 relative flex items-center justify-center group cursor-pointer focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="white"
            class="hover:text-text-primary dark:hover:text-text-primary "
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.20374 15.8174C6.18177 15.8563 6.15975 15.8945 6.13771 15.9322H17.8623C17.8403 15.8945 17.8182 15.8563 17.7963 15.8174C16.8756 14.1898 16.3333 12.0111 16.3333 9.21793C16.3333 6.93819 14.4012 5.07507 12 5.07507C9.5988 5.07507 7.66667 6.93819 7.66667 9.21793C7.66667 12.0111 7.12442 14.1898 6.20374 15.8174ZM20 17.9322H4.00001C3.00196 17.9322 2.61971 16.6307 3.45925 16.091C3.66114 15.9612 4.0464 15.5691 4.46294 14.8327C5.20893 13.5139 5.66667 11.6748 5.66667 9.21793C5.66667 5.81702 8.51018 3.07507 12 3.07507C15.4898 3.07507 18.3333 5.81702 18.3333 9.21793C18.3333 11.6748 18.7911 13.5139 19.5371 14.8327C19.9536 15.5691 20.3389 15.9612 20.5408 16.091C21.3803 16.6307 20.9981 17.9322 20 17.9322ZM12.9372 19.2783C13.2219 18.805 13.8363 18.6521 14.3096 18.9368C14.7828 19.2215 14.9357 19.836 14.651 20.3092C14.0976 21.2292 13.0875 21.7902 12 21.7902C10.9125 21.7902 9.90245 21.2292 9.34903 20.3092C9.06434 19.836 9.2172 19.2215 9.69045 18.9368C10.1637 18.6521 10.7781 18.805 11.0628 19.2783C11.2515 19.5919 11.6085 19.7902 12 19.7902C12.3915 19.7902 12.7485 19.5919 12.9372 19.2783Z"
            ></path>
          </svg>
        </div>
      </nav>
    </ResponsiveLayout>
  );
};

export default CustomNavBar;
