import React from "react";

const Login = () => {
  const handleOAuthLogin = (provider) => {
    window.location.href = `http://your-backend-url.com/auth/${provider}`;
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Forgot your password?
            </a>
          </div>
          <div className="mb-6">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Login
            </button>
          </div>
          <div className="text-center text-gray-600 mb-4"></div>
          <div className="flex justify-center space-x-20">
            <img
              src="./Google.png"
              alt="Sign In with Google"
              className="w-10 h-10 cursor-pointer"
              onClick={() => handleOAuthLogin('google')}
            />
            <img
              src="./reg-facebook.png"
              alt="Sign In with Facebook"
              className="w-10 h-10 cursor-pointer"
              onClick={() => handleOAuthLogin('facebook')}
            />
            <img
              src="./apple.png"
              alt="Sign In with Apple"
              className="w-10 h-10 cursor-pointer"
              onClick={() => handleOAuthLogin('apple')}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
