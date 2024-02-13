import React from 'react';

const Login = () => {
  return (
    <section className="w-screen h-screen flex overflow-auto">
      <div className="w-screen h-full flex flex-row justify-between items-center">
        <div className="hidden md:block w-1/2 h-full bg-colorBluePrimary">
          <div className="w-full h-2/3 items-center justify-center bg-white rounded-b-full">
            <h2>hello</h2>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start md:items-start w-full md:w-1/2 h-screen justify-center px-8">
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
