import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          These Terms and Conditions ("Terms") govern your use of the{" "}
          <span className="font-semibold text-gray-800">E-Commerce</span>{" "}
          website and services. By accessing or purchasing from our site, you
          agree to these Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Use of Website
        </h2>
        <p className="text-gray-600">
          You agree to use this website for lawful purposes only. Any misuse,
          including fraudulent activity or unauthorized access, is strictly
          prohibited.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. Account Responsibility
        </h2>
        <p className="text-gray-600">
          If you create an account, you're responsible for maintaining its
          confidentiality and all activities under your login credentials.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. Pricing & Availability
        </h2>
        <p className="text-gray-600">
          All prices are listed in PKR and are subject to change without notice.
          We reserve the right to discontinue or modify products at any time.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Orders & Payments
        </h2>
        <p className="text-gray-600">
          Orders are subject to acceptance and availability. Payment must be
          made at the time of checkout using our secure payment gateway.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          5. Returns & Refunds
        </h2>
        <p className="text-gray-600">
          Please review our{" "}
          <a href="/returns" className="text-blue-500 hover:underline">
            Return Policy
          </a>{" "}
          for details on how to return items and receive a refund.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          6. Intellectual Property
        </h2>
        <p className="text-gray-600">
          All content, logos, and graphics on this site are the property of
          ShopEase and may not be reused without permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          7. Limitation of Liability
        </h2>
        <p className="text-gray-600">
          ShopEase is not liable for any indirect, incidental, or consequential
          damages arising from the use of our site or products.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          8. Modifications to Terms
        </h2>
        <p className="text-gray-600">
          We may update these Terms from time to time. Continued use of our site
          implies acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          9. Contact
        </h2>
        <p className="text-gray-600">
          Questions about these Terms? Contact us at{" "}
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

export default TermsConditions;
