import React from "react";
import { FaChartLine, FaUsers, FaTasks, FaComments } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Streamline Your Customer Relationships
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Boost sales, improve customer satisfaction, and grow your business
              with our powerful CRM solution.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/dashboard"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase dark:text-blue-400">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Everything you need to manage your customers
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white dark:bg-blue-400">
                    <FaChartLine className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Advanced Analytics
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Gain insights into your customer interactions and sales
                    performance with powerful analytics tools.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white dark:bg-blue-400">
                    <FaUsers className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Contact Management
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Easily manage and organize your contacts, leads, and
                    customers in one centralized database.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white dark:bg-blue-400">
                    <FaTasks className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Task Automation
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Automate repetitive tasks and workflows to increase
                    efficiency and productivity.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white dark:bg-blue-400">
                    <FaComments className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Communication Tools
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Seamlessly communicate with your customers through
                    integrated email, chat, and phone features.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 dark:bg-blue-900">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200 dark:text-blue-300">
            Experience the power of our CRM solution risk-free for 14 days. No
            credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
