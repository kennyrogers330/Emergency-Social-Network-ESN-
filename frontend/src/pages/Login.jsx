import React from 'react';

const Login = () => {
  return (
    <section className="w-screen h-full bg-white flex">
      <div className="h-full flex flex-row justify-between items-center flex-wrap">
        <div className="flex w-[600px] h-screen bg-colorBluePrimary mr-8">
          <div className="relative w-screen h-1/2 bg-colorBluePrimary">
            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-b-full">
              <h2 className="p-4">Hello</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div>
            <a
              href="https://res.cloudinary.com/dcpjf6uns/image/upload/v1707620915/Logo_llf7pi.png"
              className="flex items-center space-x-3"
            >
              <img
                src="https://res.cloudinary.com/dcpjf6uns/image/upload/v1707620915/Logo_llf7pi.png"
                className="h-10"
                alt="ESN Logo"
              />
            </a>
          </div>
          <div className="mt-9 mb-8">
            <h1 className="font-sans font-semibold text-2xl text-gray-700">
              Welcome Back
            </h1>
            <p className="font-sans text-gray-500 text-lg">
              Enter your details to continue
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
