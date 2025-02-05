import React, { useState } from "react";
import { Eye, EyeOff, UserCircle, Plus } from "lucide-react";
import { useAppNavigate } from "../../../hooks/useAppNavigate";
import { errorToast, successToast } from "../../../utils/showToast";
import { axiosInstance } from "../../../apis/axiosInstance";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "usern",
    email: "user3@gmail.com",
    phone: "1234123412",
    password: "Anand@123",
    confirmPassword: "Anand@123",
    profileImage: null,
  });
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmPassword: "",
  //   profileImage: null,
  // });

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
    setFormData((prevData) => {
      return {
        ...prevData,
        profileImage: file,
      };
    });
  };

  const validateFields = () => {
    const { name, email, phone, password, confirmPassword, profileImage } = formData;
    if (!profileImage) {
      errorToast("Photo is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    if (!validateFields()) {
      console.log('ch')
      return;
    }
    console.log('else')
    const myFormData = new FormData();
    const {name, phone, email, password, confirmPassword, profileImage} = formData;
    myFormData.append("name",name)
    myFormData.append("phone_number",phone)
    myFormData.append("email",email)
    myFormData.append("password",password)
    myFormData.append("confirm_password",confirmPassword)
    myFormData.append("profile_image",profileImage)
    sendDataToServer(myFormData)
  };

  const sendDataToServer = async (data) => {
    try {
      // console.log('dataa ',data);
      // const res = await axiosInstance.post('/register', data, {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // })

      fetch("http://127.0.0.1:8000/api/ai_bot_api/register/", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          alert('registratiomn successful')
          console.log("Registration Successful:", data);
         
        })
        .catch((error) => {
          console.error("Registration Error:", error);
         
        });


      console.log('res p', res);
    } catch (error) {
      console.log("Error on SIGNUP", error)
    }
  }

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
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address"
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
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Please enter minimum 8 characters with 1 uppercase, 1 lowercase and 1 number"
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
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Please enter minimum 8 characters with 1 uppercase, 1 lowercase and 1 number"
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
                pattern="\d{10}"
                title="Please enter a valid 10-digit phone number"
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
