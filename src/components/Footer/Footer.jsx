import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white p-4 pt-0 mont">
      <div className="flex justify-end gap-12 p-3 pr-16 mx-8 border-b-[1px] border-gray-500 items-center">
        <div>Ready to get started?</div>
        <Link href="/register/donor">
          <button className="mx-auto justify-center w-40 bg-white flex text-black pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1">
            Donate
          </button>
        </Link>
      </div>
      <div className="flex justify-between p-4 mx-8 border-b-[1px] border-gray-500">
        <div className="flex flex-col">
          <h2 className="text-xl my-1">Looking for Blood</h2>
          <div className="flex flex-col">
            <Link href="#" className="text-sm hover:underline">
              Blood Availability
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Blood Bank Directory
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl my-1">Want to donate blood</h2>
          <Link href="#" className="text-sm hover:underline">
            Blood Donation Camps
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Donor Login
          </Link>
          <Link href="#" className="text-sm hover:underline">
            About Blood Donation
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl my-1">Blood Bank Login</h2>
          <Link href="#" className="text-sm hover:underline">
            BloodBank Login
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Add your Blood Bank
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">About us</h2>
          <Link href="#" className="text-sm hover:underline">
            About BloodChain
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Contact us
          </Link>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-sm text-center my-2">
          Copyright © 2023 by BU Community, Jhansi
        </p>
        <div className="text-center">
          <Link href="#" className="text-sm hover:underline">
            {" "}
            Terms & Conditions{" "}
          </Link>
          |
          <Link href="#" className="text-sm hover:underline">
            {" "}
            Privacy Policy{" "}
          </Link>
          |
          <Link href="#" className="text-sm hover:underline">
            {" "}
            Accessibility Statement{" "}
          </Link>
          |
          <Link href="#" className="text-sm hover:underline">
            {" "}
            Last Update:21-Nov-2023{" "}
          </Link>
          |
          <Link href="#" className="text-sm hover:underline">
            {" "}
            Site Map{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
