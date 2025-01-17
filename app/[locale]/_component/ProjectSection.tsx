/* eslint-disable react/jsx-key */
import Image from 'next/image'
import React from 'react'
import projectDummy from '@/public/images/work7.jpg'
import { getProjPageData } from '../(protected)/pages/home/lib/data';
import { getProjectData } from '../lib/data';

export default async function ProjectSection() {
    const data = await getProjPageData();
    const projectData = await getProjectData();
    const reverseData = projectData?.toReversed();
  return (
    <>
    {/* Projct */}
    <div className="lg:pt-25 pt-15" id="projects">
        <div className="container">
            <div className="text-center pb-15 fadeInUp" data-delay="0.2">
                <h3
                    className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
                    <i className="ri-arrow-right-up-line text-primary"></i>
                    {data?.tagline}
                </h3>
                <h2
                    className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
                    {data?.headline}</h2>
                <p className="md:text-xl md:leading-7 text-base mt-2">{data?.desc}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {reverseData?.slice(0,4).map((item) => (
                    <div key={item.id}>
                    <a href="" className="work-popup">
                        <div
                            className="rounded-lg overflow-hidden relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,_rgba(0,0,0,.3),_transparent)] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-500 group">
                           <Image
                            src={projectDummy}
                            width={1000}
                            height={1000}
                            alt=""
                            className="group-hover:blur-[1.5px] group-hover:scale-[1.04] transition-all duration-500"
                            />
                            <span
                                className="absolute top-4 right-4 inline-block rounded-[32px] bg-[rgba(255,79,1,.5)] py-[7px] px-[14px] text-white text-sm uppercase tracking-wider leading-[30px] font-medium">{item.category}</span>
                            <div
                                className="z-20 absolute left-7.5 -bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500">
                                <h1 className="lg:text-3xl text-[26px] font-semibold text-white">{item.nama}</h1>
                            </div>
                        </div>
                    </a>
                </div>
                ))}
                

            </div>
            <div className="mt-7.5 text-center">
                <a href={`/${data?.mainLink}`}
                    className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white">{data?.mainButton}</a>
            </div>
        </div>
    </div>
    </>
  )
}
