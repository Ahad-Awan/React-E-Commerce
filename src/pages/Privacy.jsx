import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          At <span className="font-semibold text-gray-800">E-Commerce</span>,
          your privacy is our priority. This policy outlines how we collect,
          use, and protect your personal information.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Personal Information: Name, email, phone number, address.</li>
          <li>
            Payment Information: Billing details (processed securely via
            third-party services).
          </li>
          <li>
            Usage Data: IP address, browser type, pages visited, device type.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>To process your orders and deliver products.</li>
          <li>To provide customer service and support.</li>
          <li>To send promotional emails or updates (you can opt out).</li>
          <li>To improve our website, products, and services.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. Data Protection
        </h2>
        <p className="text-gray-600">
          We implement strong security measures to protect your data. However,
          no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Sharing of Information
        </h2>
        <p className="text-gray-600">
          We never sell your personal information. We may share data with
          trusted partners who assist in operating our website and delivering
          your orders.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          5. Your Rights
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            You have the right to access, correct, or delete your personal data.
          </li>
          <li>You can unsubscribe from marketing emails at any time.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised "Last Updated" date.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          7. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions about this policy, please contact us at{" "}
          <a
            href="mailto:support@shopease.com"
            className="text-blue-500 hover:underline"
          >
            support@gmail.com
          </a>{" "}
          or call <strong>+92 312 3456789</strong>.
        </p>

        <p className="text-sm text-gray-400 mt-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
