import React from "react";
import { useForm } from "react-hook-form";

export const AddCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const districts = {
    Karnataka: [
      "Bangalore Urban",
      "Bangalore Rural",
      "Mysore",
      "Mangalore",
      "Hubli",
    ],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
    // Add more districts for other states as needed
  };

  const locations = {
    "Bangalore Urban": [
      "Koramangala",
      "Indiranagar",
      "Whitefield",
      "Electronic City",
    ],
    Mumbai: ["Andheri", "Bandra", "Colaba", "Worli"],
    // Add more locations for other districts as needed
  };

  const industryTypes = [
    "Information Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Education",
    "Retail",
    "E-commerce",
    "Consulting",
    "Real Estate",
    "Telecommunications",
  ];

  return (
    <div className="tw-max-w-4xl tw-mx-auto tw-p-6">
      <h1 className="tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-8">
        Add Company
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-6">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
          {/* Company Name */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Company Name
            </label>
            <input
              type="text"
              {...register("companyName", {
                required: "Company name is required",
              })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
            {errors.companyName && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.companyName.message}
              </p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              State
            </label>
            <select
              {...register("state", { required: "State is required" })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.state.message}
              </p>
            )}
          </div>

          {/* Company Logo */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Company Logo
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("companyLogo", {
                required: "Company logo is required",
              })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
            {errors.companyLogo && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.companyLogo.message}
              </p>
            )}
          </div>

          {/* District */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              District
            </label>
            <input
              type="text"
              {...register("district", { required: "District is required" })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
              placeholder="Enter District"
            />
            {errors.district && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.district.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Email ID
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
            {errors.email && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Location (City)
            </label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
            {errors.location && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
            {errors.phone && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Website URL */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Website URL
            </label>
            <input
              type="url"
              {...register("website", {
                required: "Website URL is required",
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "Please enter a valid URL",
                },
              })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
            {errors.website && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.website.message}
              </p>
            )}
          </div>

          {/* Industry Type */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Industry Type
            </label>
            <select
              {...register("industryType", {
                required: "Industry type is required",
              })}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            >
              <option value="">Select Industry Type</option>
              {industryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.industryType && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.industryType.message}
              </p>
            )}
          </div>
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={1}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
            {errors.description && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        {/* Description - Full Width */}

        {/* Submit Button */}
        <div className="tw-flex tw-justify-center">
          <button
            type="submit"
            className="tw-px-6 tw-py-2 tw-bg-blue-600 tw-text-white tw-rounded-lg hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
