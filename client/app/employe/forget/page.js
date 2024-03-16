"use client";
import { asyncforgetpasswordemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const { errors } = useSelector((state) => state.employeReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const SendEmailHandler = async (e) => {
    e.preventDefault()
    const em = {
      email,
    };
    await dispatch(asyncforgetpasswordemploye(em));
    if (errors.length < 10) {
      router.push("/employe/forget/otp");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  return (
    <div className="p-5 h-72">
      <h1 className="text-lg font-normal">
        Employe enter your <span className="text-blue-600">Email</span>
      </h1>
      <form onSubmit={SendEmailHandler}>
        <div class="mb-6 w-1/3">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
