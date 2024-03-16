"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { asynccurrentstudent } from "@/store/Actions/studentActions";
import Benefits from "../components/Home/benefits";
import { benefitOne, benefitTwo } from "../components/Home/data";
import { useDispatch } from "react-redux";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Home/Nav";
import Hero from "@/components/Home/hero";
import SectionTitle from "@/components/Home/sectionTitle";

const page = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(asynccurrentstudent());
  }, []);

  return (
    <>
      <Nav />
      <div className="px-10">
        <Hero/>
        <SectionTitle
          pretitle="Nextly Benefits"
          title=" Why should you use this landing page"
        >
          Nextly is a free landing page & marketing website template for
          startups and indie projects. Its built with Next.js & TailwindCSS. And
          its completely open-source.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>
      <Footer />
    </>
  );
};

export default page;
