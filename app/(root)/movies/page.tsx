"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "@/app/api/TMDB";

const Page = () => {
  // const { data } = useGetMoviesQuery("");
  // console.log(data);
  return <div className="font-bold text-xl mt-3">Movies</div>;
};

export default Page;
