import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between p-4">
        <div className="f1">
          <h2 className="text-xl">Looking for Blood</h2>
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
          <h2 className="text-xl">Want to donate blood</h2>
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
          <h2 className="text-xl">Blood Bank Login</h2>
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
      <div className="footer-2"></div>
    </div>
  );
}

export default Footer;
