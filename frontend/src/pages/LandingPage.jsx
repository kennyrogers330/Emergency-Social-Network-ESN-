import React from 'react';

const LandingPage = () => {
  return (
    <section className="h-screen w-screen bg-white flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>
      <section className="bg-slate-white h-full w-screen flex-1">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-24">
          <div className="bg-red-500 w-1/2 h-full flex">
            <h2>Heloooooooo</h2>
          </div>
          <div className="bg-blue-500">
            <h2>Heloooooooo</h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
