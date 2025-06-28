import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Return Policy</h1>

        <p className="text-gray-600 mb-4">
          At <span className="font-semibold text-gray-800">E-Commerce</span>, we
          want you to love what you ordered! If you're not satisfied, we're here
          to help.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Eligibility for Returns
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            You can request a return within <strong>7 days</strong> of receiving
            your item.
          </li>
          <li>
            Item must be unused, in original packaging, and in resellable
            condition.
          </li>
          <li>
            Returns not applicable on clearance, digital, or customized
            products.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          How to Initiate a Return
        </h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Login to your account and go to “My Orders”.</li>
          <li>
            Select the item you wish to return and click on “Request Return”.
          </li>
          <li>Follow the instructions and submit your request.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Refund Process
        </h2>
        <p className="text-gray-600">
          Once we receive and inspect your returned item, your refund will be
          processed to the original payment method within 5–7 business days.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Need Help?
        </h2>
        <p className="text-gray-600">
          If you have any questions, contact our support team at{" "}
          <a
            href="mailto:support@shopease.com"
            className="text-blue-500 hover:underline"
          >
            support@gmail.com
          </a>{" "}
          or call us at <strong>+92 312 3456789</strong>.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
