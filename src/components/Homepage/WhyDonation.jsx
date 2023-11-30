import React from "react";

function WhyDonation() {
  return (
    <div className="theme-gradient py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">
          Why Donate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Save Lives
            </h3>
            <p className="text-gray-600">
              Your blood donation can save lives by providing a critical
              resource for medical treatments and emergencies.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Community Impact
            </h3>
            <p className="text-gray-600">
              Make a positive impact on your community by contributing to a
              collective effort towards better healthcare.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Health Benefits
            </h3>
            <p className="text-gray-600">
              Regular blood donation has potential health benefits, including
              reducing the risk of certain diseases and maintaining iron levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyDonation;
