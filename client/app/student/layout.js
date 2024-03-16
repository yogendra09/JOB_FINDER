"use client";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/student/Nav/Nav";
import {
  asyncallinternships,
  asyncalljobs,
  asynccurrentstudent,
  asyncsignoutstudent,
} from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    if (!isAuthenticated) router.push("/student/");
    dispatch(asynccurrentstudent());
    dispatch(asyncalljobs());
    dispatch(asyncallinternships());
    if (isAuthenticated) router.push("/student/auth/");
  }, [isAuthenticated]);



  return (
    <div className="overflow-x-hidden">
      <Nav isAuthenticated={isAuthenticated}  />
      {children}
      <Footer/>
    </div>
  );
};

export default StudentLayout;
