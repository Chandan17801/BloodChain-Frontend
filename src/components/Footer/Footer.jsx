import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white p-4">
      <div className="flex justify-between p-4">
        <div className="f1">
          <h2 className="text-xl my-1">Looking for Blood</h2>
          <div className="flex flex-col">
            <Link href="#" className="text-sm">
              Blood Availability
            </Link>
            <Link href="#" className="text-sm">
              Blood Bank Directory
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl my-1">Want to donate blood</h2>
          <Link href="#" className="text-sm">
            Blood Donation Camps
          </Link>
          <Link href="#" className="text-sm">
            Donor Login
          </Link>
          <Link href="#" className="text-sm">
            About Blood Donation
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl my-1">Blood Bank Login</h2>
          <Link href="#" className="text-sm">
            eRaktkosh Login
          </Link>
          <Link href="#" className="text-sm">
            Add your Blood Bank
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">About us</h2>
          <Link href="#" className="text-sm">
            About eRaktkosh
          </Link>
          <Link href="#" className="text-sm">
            Contact us
          </Link>
        </div>
      </div>
      <div className="py-4">
        <p className="text-sm text-center my-2">
          © 2016 -2023 by Ministry of Health and Family Welfare
        </p>
        <div className="text-center">
          <Link href="#" className="text-sm">
            {" "}
            Terms & Conditions{" "}
          </Link>
          |
          <Link href="#" className="text-sm">
            {" "}
            Privacy Policy{" "}
          </Link>
          |
          <Link href="#" className="text-sm">
            {" "}
            Accessibility Statement{" "}
          </Link>
          |
          <Link href="#" className="text-sm">
            {" "}
            Last Update:21-Nov-2023{" "}
          </Link>
          |
          <Link href="#" className="text-sm">
            {" "}
            Site Map{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
