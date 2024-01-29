import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";

const AccessibilityStatement = () => {
  return (
    <ResponsiveLayout>
      <Header />
      <div className="max-w-2xl mx-auto p-4 text-justify">
        <h2 className="text-3xl font-bold mb-4">Accessibility Statement</h2>

        <p className="mb-4">
          At BloodChain: Empowering Lifesavers with Blockchain, we are committed
          to providing a website that is accessible to all users, including
          those with disabilities. We strive to ensure that our platform is
          usable and navigable for everyone.
        </p>

        <h3 className="text-xl font-semibold mb-2">Accessibility Features</h3>
        <p className="mb-4">
          Our platform incorporates a range of accessibility features to enhance
          user experience, including but not limited to:
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Keyboard navigation support</li>
          <li>Text alternatives for non-text content</li>
          <li>Readable and understandable text</li>
          <li>Consistent and predictable navigation</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Feedback</h3>
        <p className="mb-4">
          We welcome feedback from users regarding the accessibility of our
          platform. If you encounter any accessibility issues or have
          suggestions for improvement, please contact us at
          accessibility@bloodchain.com.
        </p>

        <h3 className="text-xl font-semibold mb-2">Ongoing Effort</h3>
        <p className="mb-4">
          Our team is dedicated to continually improving the accessibility of
          our platform. We regularly review and enhance our website to ensure
          compliance with accessibility standards.
        </p>

        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="mb-4">
          If you have any questions or concerns about the accessibility of our
          platform, please contact us at accessibility@bloodchain.com.
        </p>

        <p>
          Thank you for using BloodChain, and we appreciate your commitment to
          accessibility and inclusivity.
        </p>
      </div>
      <Footer />
    </ResponsiveLayout>
  );
};

export default AccessibilityStatement;
