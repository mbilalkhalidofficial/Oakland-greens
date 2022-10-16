import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCard from "./SwiperCard";

import Slide from 'react-reveal/Slide';

export default function SwiperComponent() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  function changeSlidesPerView() {
    if (window.innerWidth < 650) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 900) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <Slide bottom>
    <div className="main_swiper_wrapper">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperCard
            svg={
         

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>   }
            title="Logistics"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            culpa cum dolorum eius esse labore odio quas totam. Magnam, quae?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            svg={
          
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            }
            title="Digital Services"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            culpa cum dolorum eius esse labore odio quas totam. Magnam, quae?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            svg={
              
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            }
            title="Advanced Analytics"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            culpa cum dolorum eius esse labore odio quas totam. Magnam, quae?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            svg={
           
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-merge"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
            }
            title="Cybersecurity"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            culpa cum dolorum eius esse labore odio quas totam. Magnam, quae?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            svg={
           
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            }
            title="Management Consulting"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            culpa cum dolorum eius esse labore odio quas totam. Magnam, quae?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            svg={
           
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            }
            title="Advanced Analytics"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            culpa cum dolorum eius esse labore odio quas totam. Magnam, quae?"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </Slide>
  );
}
