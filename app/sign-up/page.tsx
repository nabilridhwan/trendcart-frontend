"use client";
import { AuthAPIService } from "@/services/auth/auth-api-service";
import { SignUpBody } from "@/types/services/auth";
import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import login = AuthAPIService.login;

interface userDataProps {
  open_id: string;
  access_token: string;
  avatar_url: string;
  display_name: string;
}

export default function SignUp() {
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<userDataProps | null>(null);
  const [tiktokAccessToken, setTiktokAccessToken] = useState<string | null>(
    null,
  );
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country_id: "",
    tiktok_open_id: "",
    address_line1: "",
    address_line2: "",
    city: "",
    postal_code: "",
    state: "",
    remarks: "",
  });

  useEffect(() => {
    console.log("userData", userData);
    if (!userData) return;

    setFormData({
      ...formData,
      username: userData.display_name || "",
      tiktok_open_id: userData.open_id || "",
    });
  }, [userData]);

  useEffect(() => {
    if (searchParams.get("open_id")) {
      setFormData({
        ...formData,
        tiktok_open_id: searchParams.get("open_id") || "",
      });
    }

    if (searchParams.get("tiktok_access_token")) {
      setTiktokAccessToken(searchParams.get("tiktok_access_token"));
    }
  }, [searchParams]);

  useEffect(() => {
    const getUserData = localStorage.getItem("tokenData");

    if (!getUserData) return;

    setUserData(JSON.parse(getUserData));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      tiktok_open_id: formData.tiktok_open_id,
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

    try {
      const res = await AuthAPIService.signup(signupBody);

      // If the request went through, log the user in

      const loginRes = await login({
        tiktok_access_token: userData?.access_token || "",
      });

      const authToken = loginRes.data.data;
      localStorage.setItem("authToken", authToken);
      window.location.href = "/home";

      console.log("signup", res);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("error", error);
        if (error.response?.status === 409) {
          if (!signupBody.tiktok_open_id) {
            alert("Can't sign up because has no tiktok_open_id");
            return;
          }

          //   If user already exists, log them in
          const loginRes = await login({
            tiktok_access_token: tiktokAccessToken || "",
          });

          const authToken = loginRes.data.data;
          localStorage.setItem("authToken", authToken);
          window.location.href = "/home";
        }
      }
    }
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
            <label className="block text-gray-700">Name</label>
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
