import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const {loading,signup} = useSignup();
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await signup(user);
  };

  const handleBackButton = (event) =>{
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 relative">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg bg-slate-200 shadow-lg rounded-lg p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Sign Up
        </h1>
        <p className="text-center text-gray-500">
          <b>Create your account by filling in the details below</b>
        </p>

        <div className="space-y-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              className="w-full border rounded-lg px-4 py-2 text-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your first name"
              required
              value={user.fullname}
              onChange={handleInputChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full border rounded-lg px-4 py-2 text-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your last name"
              required
              value={user.username}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className={`w-full border rounded-lg px-4 py-2 text-white-900 focus:outline-none ${
                user.email
                  ? isEmailValid
                    ? "border-green-500 focus:ring-2 focus:ring-green-500"
                    : "border-pink-500 focus:ring-2 focus:ring-pink-500"
                  : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
              }`}
              placeholder="Enter your email"
              required
              value={user.email}
              onChange={handleInputChange}
            />
            {!isEmailValid && user.email && (
              <p className="mt-1 text-sm text-pink-500">
                Please enter a valid email address.
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border rounded-lg px-4 py-2 text-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full border rounded-lg px-4 py-2 text-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
              value={user.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-600"
            >
              Gender 
            </label>
            <input
              type="text"
              name="gender"
              className="w-full border rounded-lg px-4 py-2 text-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
              value={user.gender}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 text-white font-bold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          disabled={loading}
        >
          {loading? <span className="loading loading-spinner"></span>:"Sign Up"}
        </button>
        <button className="w-full py-2 text-white font-bold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition duration-300"
        onClick={handleBackButton}>
        Back To Dashboard
      </button>
      </form>
    </div>
  );
};
