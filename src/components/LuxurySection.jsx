import React from "react";
import luxury from "../assets/luxury.png";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";

export function LuxurySection() {
  return (
    <div className="luxury">
      <Fade bottom>
        <div className="luxury__section">
          <div className="luxury__section__left">
            <div className="luxury__section__left__heading">
              Our luxury <span>upcoming</span> for more discering Customers
            </div>
            <div className="luxury__section__left__para">
              Oakland Greens is built and designed in line with international
              standards of farmhouses in to make it your joyful place. During
              your stays here, just sip signature cocktails at the restaurant
              whilst overlooking the beautiful azure blue skies and the
              magnificent hills or watch the glorious sunsets while you recline
              beside the pool.. Each service at Oakland Greens is designed to
              make the moments unforgettable.
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
      </Fade>{" "}
    </div>
  );
}
