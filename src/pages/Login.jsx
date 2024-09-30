import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formData = new FormData();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;

    for (let element of formElements) {
      if (element.name) {
        formData.set(
          element.name,
          element.type === "checkbox" ? element.checked : element.value
        );
      }
    }

    if (isLogin) {
      const email = formData.get("email");
      const password = formData.get("password");
      const remember = formData.get("remember");

      console.log("Logging in with:", { email, password, remember });
      // Navigate to home after successful login
      navigate("/home");
    } else {
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
      const terms = formData.get("terms");

      if (password !== confirmPassword) {
        console.error("Passwords do not match!");
        return;
      }
      if (!terms) {
        console.error("You must accept the terms and conditions!");
        return;
      }
      console.log("Signing up with:", { email, password });
      
      // Switch to login mode after successful signup
      setIsLogin(true);
    }
  };

  return (
    <section className="w-full h-full flex items-center justify-center ">
      {isLogin ? (
        <div className="w-full bg-[#03302d] bg-opacity-30 backdrop-blur-lg rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent border border-white bg-opacity-50 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-transparent border border-white bg-opacity-50 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      name="remember"
                      className="w-4 h-4 border border-white rounded bg-gray-50 focus:ring-3 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-white hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#c9983d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-300">
                Don’t have an account yet?{" "}
                <button
                  type="button"
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full bg-[#03302d] bg-opacity-30 backdrop-blur-lg rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent border border-white bg-opacity-50 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-transparent border border-white bg-opacity-50 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="bg-transparent border border-white bg-opacity-50 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    name="terms"
                    className="w-4 h-4 border border-white rounded bg-gray-50 focus:ring-3 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="text-white"
                  >
                    I accept the{" "}
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#c9983d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-300">
                Already have an account?{" "}
                <button
                  type="button"
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => setIsLogin(true)}
                >
                  Sign in
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
