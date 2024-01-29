import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <ResponsiveLayout>
      <Header />
      <div className="max-w-2xl mx-auto p-4 text-justify">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>

        <p className="mb-4">
          Welcome to BloodChain: Empowering Lifesavers with Blockchain! This
          Privacy Policy outlines how we collect, use, disclose, and protect
          your personal information. Please read this policy carefully to
          understand how we handle your data.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h3>
        <p className="mb-4">
          We may collect various types of information, including but not limited
          to personal information provided during registration, transaction
          details, and usage data when you interact with our platform.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h3>
        <p className="mb-4">
          We use the collected information to provide and improve our services,
          facilitate communication between blood banks, hospitals, and donors,
          and ensure the security and integrity of the blood donation process.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Information Sharing</h3>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as required by law or to
          facilitate the services offered by our platform.
        </p>

        <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
        <p className="mb-4">
          We implement security measures to protect your data, including
          encryption and access controls. However, no method of transmission
          over the internet or electronic storage is 100% secure.
        </p>

        <h3 className="text-xl font-semibold mb-2">5. Cookies and Tracking</h3>
        <p className="mb-4">
          We may use cookies and similar tracking technologies to enhance your
          experience on our platform. You can control cookie preferences through
          your browser settings.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          6. Changes to Privacy Policy
        </h3>
        <p className="mb-4">
          We may update our Privacy Policy to reflect changes in technology,
          legal requirements, or platform features. Users will be notified of
          any significant changes.
        </p>

        <h3 className="text-xl font-semibold mb-2">7. Contact Us</h3>
        <p className="mb-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at privacy@bloodchain.com.
        </p>

        <p className="mb-4">
          By using the BloodChain platform, you agree to the terms outlined in
          this Privacy Policy. Thank you for your trust and for being a part of
          our mission to create a secure and transparent blood donation
          community.
        </p>
      </div>
      <Footer />
    </ResponsiveLayout>
  );
};

export default PrivacyPolicy;
