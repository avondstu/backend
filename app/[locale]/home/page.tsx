import React from "react";
import Header from "../Header";
import { getBrandServices, getData } from "./lib/data";

export default async function page() {

  const HomeData = await getData();

  const Service = await getBrandServices();

  return (
    <>
      {/* <Header /> */}
      
      <section className="bg-[#FFF7EA] min-h-screen">
        <div className="container h-full ">
          <div className="aximo-section-title pt-[10vw]  arimo-font center full-width p-0 text-center">
            <span className="aximo-subtitle text-[#08D856] text-[24px] text-center font-bold">
              Why Effektiv is effective?
            </span>
            <h2 className="text-[60px] mt-[1vw] font-bold leading-[4vw]">
              {HomeData?.why}
            </h2>
          </div>
        </div>
        <div className="aximo-v4-shape1">
          {/* <img src="assets/images/v4/shape1.png" alt=""> */}
        </div>
        {/* <!-- End sction --> */}

        <div className="aximo-brandlogo-section2 extra-side-margin">
          <div className="swiper aximo-auto-slider px-[5vw] ">
            <div className="swiper-wrapper bg-[#122C29] py-[3vw] rounded-full mt-[5vw] flex justify-between items-center gap-[2vw] px-[4vw]">

              {Service?.map((data) => (
                <div key={data.id} className="swiper-slide">
                <div className="aximo-brandlogo-item">
                  <h4 className= {`${data.id % 2 == 0 ? 'text-white' : 'text-[#08D856]'} text-[20px] font-bold`}>{data.nama}</h4>
                </div>
              </div>
              ))}
              {/* <div className="swiper-slide">
                <div className="aximo-brandlogo-item">
                  <h4 className="text-white text-[20px] font-bold">Instagram Management</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="aximo-brandlogo-item">
                  <h4 className="text-[20px] font-bold text-[#08D856]">Graphic Design</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="aximo-brandlogo-item">
                  <h4 className="text-white text-[20px] font-bold">Our Services</h4>
                </div >
              </div>
              <div className="swiper-slide">
                <div className="aximo-brandlogo-item">
                  <h4 className="text-[20px] font-bold text-[#08D856]">Copywriting & Translation</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="aximo-brandlogo-item">
                  <h4 className="text-white text-[20px] font-bold">E-Commerce Management</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="aximo-brandlogo-item">
                  <h4 className="text-[20px] font-bold text-[#08D856]">TikTok Management</h4>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
