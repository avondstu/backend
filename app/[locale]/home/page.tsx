import React from "react";
import Shape from '@/public/client/shapes/shape1.png'
import Shape2 from '@/public/client/shapes/shape2.png'

import Header from "../Header";
import { getBrandServices, getData } from "./lib/data";
import Image from "next/image";
import ServiceSection from "./_component/ServiceSection";


export default async function page() {

  const HomeData = await getData();

  

  return (
    <>
      {/* <Header /> */}
      {/* Bannrt */}
      <section id="home" className="lg:pt-[200px] pt-[120px] mb-[10vw]">
        <div className="container">
            <div className="md:w-[70%] mx-auto text-center relative fadeInUp" data-delay="0.2">
                <h3
                    className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
                    {HomeData?.tagline}
                </h3>
                <h2
                    className="lg:py-2.5 py-5 font-semibold xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] ">
                    {HomeData?.headline}</h2>
                <p className="text-xl leading-7 mb-[5px] px-15 text-black-100">
                    {HomeData?.desc}</p>
                <div className="mt-7.5">
                    <a href={`/${HomeData?.mainLink}`}
                        className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white">
                        {HomeData?.mainButton}</a>
                    <a href={`/${HomeData?.secondLink}`} className="btn bg-black-200 text-white border-black-200 hover:bg-red-500">{HomeData?.secondButton}</a>
                </div>
                <div className="absolute lg:right-[-25%] top-1/2 right-0">
                    {/* <img src="/assets/images/shapes/shape1.png" alt="Shape" className="lg:max-w-[300px] max-w-[70px]"/> */}
                    <Image
                    src={Shape}
                    width={1000}
                    height={1000}
                    alt=""
                    className="lg:max-w-[300px] max-w-[70px]"
                    />
                </div>
                <div className="absolute lg:-left-[30%] top-[10%] left-0">
                    {/* <img src="/assets/images/shapes/shape2.png" alt="Shape" className="lg:max-w-[200px] max-w-15"/> */}
                    <Image
                    src={Shape2}
                    width={1000}
                    height={1000}
                    alt=""
                    className="lg:max-w-[200px] max-w-15"
                    />
                    
                </div>
            </div>
        </div>
        </section>

        {/* Services */}
        <ServiceSection/>
    </>
  );
}
