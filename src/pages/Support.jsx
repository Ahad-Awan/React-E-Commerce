import React from "react";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Help & Support
        </h1>

        <p className="text-gray-600 mb-4">
          We're here to assist you with any questions, issues, or feedback you
          may have about your shopping experience on{" "}
          <span className="font-semibold text-gray-800">E-Commerce</span>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Frequently Asked Questions
        </h2>
        <ul className="text-gray-600 list-disc list-inside space-y-3">
          <li>
            <strong>How do I track my order?</strong>
            <br />
            You can track your order in the “My Orders” section of your account.
            You’ll also receive email updates.
          </li>
          <li>
            <strong>What is your return policy?</strong>
            <br />
            We accept returns within 7 days of delivery. Please visit our{" "}
            <a href="/returns" className="text-blue-500 hover:underline">
              Return Policy
            </a>{" "}
            page for details.
          </li>
          <li>
            <strong>Can I cancel my order?</strong>
            <br />
            Orders can be canceled within 1 hour of placing them. After that,
            they may already be in the shipping process.
          </li>
          <li>
            <strong>What payment methods are accepted?</strong>
            <br />
            We accept Visa, MasterCard, EasyPaisa, JazzCash, and bank transfers.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-2">
          Still Need Help?
        </h2>
        <p className="text-gray-600 mb-4">
          If your question isn't answered above, feel free to reach out to our
          support team:
        </p>
        <ul className="text-gray-600 space-y-2">
          <li>
            📧 Email us at:{" "}
            <a
              href="mailto:support@shopease.com"
              className="text-blue-500 hover:underline"
            >
              support@gmail.com
            </a>
          </li>
          <li>
            📞 Call or WhatsApp us: <strong>+92 312 3456789</strong>
          </li>
          <li>💬 Live chat: Available Mon–Sat, 10AM–6PM</li>
        </ul>

        <p className="text-sm text-gray-400 mt-10">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default HelpSupport;
