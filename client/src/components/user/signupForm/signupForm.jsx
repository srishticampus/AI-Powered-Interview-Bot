import React, { useState } from "react";
import { Eye, EyeOff, UserCircle, Plus } from "lucide-react";
import { useAppNavigate } from "../../../hooks/useAppNavigate";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useAppNavigate();
  const navigateToSignin = () => {
    navigate("/user/signin");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="tw-py-16 tw-px-4">
      <div className="tw-max-w-xl tw-mx-auto">
        <h1 className="tw-text-4xl tw-font-bold text-[#2B3674] tw-text-center tw-mb-12">
          Sign Up!
        </h1>

        <form onSubmit={handleSubmit} className="tw-space-y-6">
          {/* Profile Image Upload */}
          <div className="tw-flex tw-justify-center tw-mb-8">
            <div className="tw-relative">
              <div className="tw-w-32 tw-h-32 tw-rounded-full tw-bg-gray-100 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Profile preview"
                    className="tw-w-full tw-h-full tw-object-cover"
                  />
                ) : (
                  <UserCircle className="tw-w-20 tw-h-20 tw-text-gray-400" />
                )}
              </div>
              <label
                htmlFor="profile-image"
                className="tw-absolute tw-bottom-0 tw-right-0 tw-w-8 tw-h-8 tw-bg-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-cursor-pointer hover:tw-bg-blue-700 tw-transition-colors"
              >
                <Plus className="tw-w-5 tw-h-5 tw-text-white" />
                <input
                  type="file"
                  id="profile-image"
                  className="tw-hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              <p className="tw-text-center tw-text-gray-600 tw-mt-2">
                + Add Image
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="tw-space-y-4">
            <div className="tw-flex  tw-justify-between">
              <div className="tw-w-5/12 ">
                <label
                  htmlFor="name"
                  className="tw-block text-[#2B3674] tw-mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-blue-500 focus:tw-ring-2 focus:tw-ring-blue-200 tw-transition-colors"
                  required
                />
              </div>

              <div className="tw-w-5/12 ">
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
            </div>

            <div className="tw-flex tw-justify-between">
              <div className="tw-relative tw-w-5/12">
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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="tw-absolute tw-right-3 tw-top-10 tw-text-gray-500 hover:tw-text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="tw-w-5 tw-h-5" />
                  ) : (
                    <Eye className="tw-w-5 tw-h-5" />
                  )}
                </button>
              </div>

              <div className="tw-relative tw-w-5/12">
                <label
                  htmlFor="confirmPassword"
                  className="tw-block text-[#2B3674] tw-mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-blue-500 focus:tw-ring-2 focus:tw-ring-blue-200 tw-transition-colors"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="tw-absolute tw-right-3 tw-top-10 tw-text-gray-500 hover:tw-text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="tw-w-5 tw-h-5" />
                  ) : (
                    <Eye className="tw-w-5 tw-h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="tw-block text-[#2B3674] tw-mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-blue-500 focus:tw-ring-2 focus:tw-ring-blue-200 tw-transition-colors"
                required
              />
            </div>
          </div>

          <div className="tw-flex tw-flex-col tw-items-center">
            <button
              type="submit"
              className="tw-w-md tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-font-semibold tw-py-3 tw-px-6 tw-rounded-full tw-transition-colors"
            >
              Sign up
            </button>
            <p className="tw-mt-5">
              Already have an account?{" "}
              <span
                className="tw-text-lexiBlue-500 tw-font-bold tw-cursor-pointer"
                onClick={navigateToSignin}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
