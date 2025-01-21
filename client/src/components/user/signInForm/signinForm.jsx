import React, { useState } from "react";
import { Eye, EyeOff, UserCircle, Plus } from "lucide-react";
import { useAppNavigate } from "../../../hooks/useAppNavigate";

export const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useAppNavigate();
  const navigateToSignup = () => {
    navigate("/user/signup");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="tw-py-16 tw-px-4">
      <div className="tw-max-w-md tw-mx-auto">
        <h1 className="tw-text-4xl tw-font-bold text-[#2B3674] tw-text-center tw-mb-12">
          Sign In!
        </h1>

        <form onSubmit={handleSubmit} className="tw-space-y-6">
          {/* Profile Image Upload */}

          {/* Form Fields */}
          <div className="tw-space-y-4">
            <div>
              <label
                htmlFor="email"
                className="tw-block text-[#2B3674] tw-mb-1"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-blue-500 focus:tw-ring-2 focus:tw-ring-blue-200 tw-transition-colors"
                required
              />
            </div>

            <div className="tw-relative">
              <label
                htmlFor="password"
                className="tw-block text-[#2B3674] tw-mb-1"
              >
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-blue-500 focus:tw-ring-2 focus:tw-ring-blue-200 tw-transition-colors"
                required
              />
              <div className="tw-flex tw-justify-end">
                <p className="tw-text-lexiBlue-500 tw-font-bold">
                  Forgot password?
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="tw-absolute tw-right-3 tw-top-11 tw-text-gray-500 hover:tw-text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="tw-w-5 tw-h-5" />
                ) : (
                  <Eye className="tw-w-5 tw-h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="tw-flex tw-flex-col tw-items-center ">
            <button
              type="submit"
              className="tw-w-md tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-font-semibold tw-py-3 tw-px-6 tw-rounded-full tw-transition-colors"
            >
              Sign In
            </button>
            <p className="tw-mt-5">
              Don't have an account?{" "}
              <span
                className="tw-text-lexiBlue-500 tw-font-bold tw-cursor-pointer"
                onClick={navigateToSignup}
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
