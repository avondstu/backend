import React from "react";
import Service1 from "@/public/client/services/service1.jpg";
import Service2 from "@/public/client/services/service2.jpg";
import Service3 from "@/public/client/services/service3.jpg";
import Image from "next/image";
import { getBrandServices } from "../lib/data";
import { getServPageData } from "../(protected)/pages/service/lib/data";

export default async function ServiceSection() {
  const Service = await getBrandServices();
  const data = await getServPageData();

  return (
    // <!-- services start -->
    <section id="services" className="lg:pt-25 pt-15">
      <div className="container">
        <div className="text-center pb-15 fadeInUp" data-delay="0.2">
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
            <i className="ri-arrow-right-up-line text-primary"></i>
            {data?.tagline}
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
            {data?.headline}
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            {data?.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
         
            {Service?.map((serv) => (
              <div key={serv.id} className="col-lg-4 col-md-6">
                <div
                className="info-item border border-[#bebebe] pt-7.5 pl-7.5 rounded-[15px] fadeInUp"
                data-delay="0.2"
              >
                <div className="mb-10">
                  <h4 className="lg:text-3xl text-[26px] lg:leading-[49px] font-medium mb-2">
                    {serv.layanan}
                  </h4>
                  <p className="lg:text-lg text-base font-medium lg:leading-7">
                    {serv.description}
                  </p>
                </div>
                {/* <img src="assets/images/services/service1.jpg" alt=""> */}
                <Image src={Service1} width={1000} height={1000} alt="" />
              </div>
              </div>
            ))}
         
       
        </div>
      </div>
    </section>
  );
}
