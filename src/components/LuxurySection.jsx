import React from "react";
import luxury from "../assets/luxury.png";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function LuxurySection() {
  return (
    <div className="luxury">
      <div className="luxury__section">
        <div className="luxury__section__left">
          <div className="luxury__section__left__heading">
            Our luxury <span>upcoming</span> for more discering Customers
          </div>
          <div className="luxury__section__left__para">
            Dream Home is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the best
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys. . Laundry is available
            on premises.
          </div>
          <div className="luxury__section__left__button">Read More</div>
        </div>
        <div className="luxury__section__right">
          <Swiper
            className="z" // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="t">
                <div className="luxury__section__right__img">
                  <img
                    className="luxury__section__right__image"
                    src={luxury}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="t">
                <div className="luxury__section__right__img">
                  <img
                    className="luxury__section__right__image"
                    src={luxury}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="t">
                <div className="luxury__section__right__img">
                  <img
                    className="luxury__section__right__image"
                    src={luxury}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="t">
                <div className="luxury__section__right__img">
                  <img
                    className="luxury__section__right__image"
                    src={luxury}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
