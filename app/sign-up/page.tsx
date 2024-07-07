"use client";
import { AuthAPIService } from "@/services/auth/auth-api-service";
import { ObtainTokenSuccessResponse, SignUpBody } from "@/types/services/auth";
import React, { useState } from "react";

export default function SignUp() {
  const getUserData = localStorage.getItem("tokenData");
  const userData = JSON.parse(getUserData || "");
  const [formData, setFormData] = useState({
    username: userData?.display_name || "",
    email: "",
    country_id: "",
    open_id: userData?.open_id || "",
    address_line1: "",
    address_line2: "",
    city: "",
    postal_code: "",
    state: "",
    remarks: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRemarksChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, remarks: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const signupBody: SignUpBody = {
      name: formData.username,
      email: formData.email,
      country_id: 200,
      tiktok_open_id: formData.open_id,
      address: {
        address_line1: formData.address_line1,
        address_line2: formData.address_line2,
        city: formData.city,
        postal_code: formData.postal_code,
        state: formData.state,
        country_id: 200,
        remarks: formData.remarks,
      },
    };
    console.log(signupBody);
    await AuthAPIService.postSignUp(signupBody);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001F3E]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl m-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="flex justify-center mb-6">
          <img
            src={userData?.avatar_url}
            className="rounded-full w-40 h-40" // Adjusted size here (e.g., w-20 h-20 for smaller size)
            alt="Profile"
          />
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address Line 1</label>
            <input
              type="text"
              name="address_line1"
              value={formData.address_line1}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address Line 2</label>
            <input
              type="text"
              name="address_line2"
              value={formData.address_line2}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleRemarksChange}
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#001F3E] text-white font-semibold rounded-lg shadow-md hover:bg-[#f60457] transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
