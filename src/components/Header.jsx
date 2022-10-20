import React from "react";
import { NavLink } from "react-router-dom";
import headerback from "../assets/headerback.png";
import aboutfirst from "../assets/aboutfirst.png";
import aboutsecond from "../assets/aboutsecond.png";
import headerback2 from "../assets/headerback2.png";
import aboutsecondbox from "../assets/aboutsecondbox.png";
import aboutlast from "../assets/aboutlast.png";
import oaklandlogo from "../assets/oaklandlogo.png";
import map from "../assets/map.svg";
import map2 from "../assets/map2.svg";
import farmbackground from "../assets/farm-background.png";

import first from "../assets/first.svg";
import first2 from "../assets/first2.svg";
import first3 from "../assets/first3.svg";
import firstfour from "../assets/firstfour.svg";
import first23 from "../assets/first23.svg";
import swiperpic from "../assets/swiperpic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, A11y } from "swiper";

// Import Swiper styles

import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Header() {
  return (
    <>
      <div className="oakland_section">
        <div className="oakland_section__weaper">
          <div className="oakland_section__weaper__backimg">
            <div className="oakland_section__weaper__backimgs"></div>
          </div>
          <div className="oakland_section__weaper__overlay">
            <div className="oakland_section__weaper__overlay__navbar">
              <div className="oakland_section__weaper__overlay__navbar__left">
                <img
                  className="oakland_section__weaper__overlay__navbar__left__logo"
                  src={oaklandlogo}
                  alt=""
                />
              </div>
              <div className="oakland_section__weaper__overlay__navbar__right">
                <NavLink className="navbar__style">Home</NavLink>
                <NavLink className="navbar__style">About Us</NavLink>
                <NavLink className="navbar__style">Features</NavLink>
                <NavLink className="navbar__style">Contact Us</NavLink>
              </div>
            </div>
            <div className="oakland_section__weaper__overlay__entry__content">
              <div className="oakland_section__weaper__overlay__entry">
                <div className="oakland_section__weaper__overlay__main_heading">
                  Most luxury houses for more discering Customers
                </div>
                <div className="oakland_section__weaper__overlay__main_heading__para">
                  Dream Home is a gated community with a great location. Located
                  downtown, you’re within walking distance of Parks, and the
                  best shopping, dining and entertainment Getting around is a
                  breeze, with easy access to freeways, buses and trolleys. .
                  Laundry is available on premises.
                </div>
                <div className="oakland_section__weaper__overlay__two button">
                  <div className="oakland_section__weaper__overlay__two__left">
                    Read More
                  </div>
                  <div className="oakland_section__weaper__overlay__two__right">
                    Read More
                  </div>
                </div>
              </div>
              <div className="headerback__second">
                <div id="zoom-In">
                  <figure>
                    <img
                      className="headerback__second__image"
                      src={headerback2}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="image">
				<div id="zoom-In">
					<figure>
          <img className="headerback__second__image" src={headerback2} alt="" />
					</figure>
				</div>
			</div>
		 */}

      <div className="feature">
        <div className="feature__content">
          <div className="feature__content__card">
            <div className="feature__content__card_two__entry">
              <div className="feature__content__card__svg">
                <img
                  className="feature__content__card__svg__image"
                  src={map}
                  alt=""
                />
              </div>
              <div className="feature__content__card__svg2">
                <img
                  className="feature__content__card__svg__image"
                  src={map2}
                  alt=""
                />
              </div>
              <div className="feature__content__card__info">Feature 1</div>
            </div>
            <div className="feature__content__card__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </div>
          </div>
          <div className="feature__content__card">
            <div className="feature__content__card_two__entry">
              <div className="feature__content__card__svg">
                <img
                  className="feature__content__card__svg__image"
                  src={map}
                  alt=""
                />
              </div>
              <div className="feature__content__card__svg2">
                <img
                  className="feature__content__card__svg__image"
                  src={map2}
                  alt=""
                />
              </div>
              <div className="feature__content__card__info">Feature 2</div>
            </div>
            <div className="feature__content__card__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </div>
          </div>
          <div className="feature__content__card">
            <div className="feature__content__card_two__entry">
              <div className="feature__content__card__svg">
                <img
                  className="feature__content__card__svg__image"
                  src={map}
                  alt=""
                />
              </div>
              <div className="feature__content__card__svg2">
                <img
                  className="feature__content__card__svg__image"
                  src={map2}
                  alt=""
                />
              </div>
              <div className="feature__content__card__info">Feature 3</div>
            </div>
            <div className="feature__content__card__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </div>
          </div>
        </div>
      </div>

      <div className="about__section">
        <div className="about__section__weaper">
          <div className="about__section__firstentry">
            <div className="about__section__firstentry__top__img">
              <img
                className="about__section__firstentry__top__image"
                src={aboutfirst}
                alt=""
              />
            </div>
            <div className="about__section__firstentry__top__img">
              <img
                className="about__section__firstentry__top__image"
                src={aboutsecond}
                alt=""
              />
            </div>
          </div>
          <div className="about__section__secondentry">
            <div className="about__section__secondentry__img">
              <div className="about__section__secondentry__image"></div>
            </div>
            <div className="about__section__secondentry__overlay">
              <div className="about__section__secondentry__heading">
                About Us
              </div>
              <div className="about__section__secondentry__para">
                Dream Home is a gated community with a great location. Located
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.Dream Home is a gated community with a
                great location. Located downtown, you’re within walking distance
                of Parks, and the best shopping, dining and entertainment
                Getting around is a breeze, with easy access to freeways, buses
                and trolleys. . Laundry is available on premises.
              </div>

              <div className="about__section__secondentry_card">
                <div className="about__section__secondentry_card__text">
                  500+
                </div>
                <div className="about__section__secondentry_card__heading">
                  Projects
                </div>
                <div className="about__section__secondentry_card__para">
                  Over 500 lexury villas for“Home Away From Home” experience
                </div>
              </div>
              <div className="about__section__secondentry_card">
                <div className="about__section__secondentry_card__text">
                  40+
                </div>
                <div className="about__section__secondentry_card__heading">
                  Locations
                </div>
                <div className="about__section__secondentry_card__para">
                  luxury villas and private holiday homes, from all across
                </div>
              </div>
              <div className="about__section__secondentry_card">
                <div className="about__section__secondentry_card__text">
                  24/7
                </div>
                <div className="about__section__secondentry_card__heading">
                  Help
                </div>
                <div className="about__section__secondentry_card__para">
                  24/7 Help service for all customers to guide and support
                </div>
              </div>
            </div>
          </div>
          <div className="about__section__thirdentry">
            <div className="about__section__thirdentry__img">
              <img
                className="about__section__thirdentry__image"
                src={aboutlast}
                alt=""
              />
            </div>

            <div className="about__section__thirdentry__bottom">
              <div className="about__section__thirdentry__text">
                Most luxury houses for more discering Customers
              </div>
              <div className="about__section__thirdentry__buttom">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="farm__house">
        <div className="farm__house__content">
          <div className="farm__house__content__left">
            <div className="farm__house__content__left__heading">
              Farm House plots
            </div>
            <div className="farm__house__content__left__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry.
            </div>
          </div>
          <div className="farm__house__content__left__button">Contact Us</div>
        </div>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="farmhouse__swiper">
          <img className="farmhouse__swiper__picture" src={swiperpic} alt="" />
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <img className="farmhouse__swiper__picture" src={swiperpic} alt="" />
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <img className="farmhouse__swiper__picture" src={swiperpic} alt="" />
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <img className="farmhouse__swiper__picture" src={swiperpic} alt="" />
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <img className="farmhouse__swiper__picture" src={swiperpic} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
      {/* <div className="farm__house__feature">
        <div className="farm__house__feature__section">
          <div className="farm__house__feature__section__heading">
            Farm House Feature
          </div>

          <div className="farm__house__feature__section__waeaper">
            <div className="farm__house__feature__section__waeaper__svg__two">
              <div className="farm__house__feature__section__waeaper__svg">
                <img
                  className="farm__house__feature__section__waeaper__image"
                  src={first}
                  alt=""
                />
              </div>

              <div className="farm__house__feature__section__waeaper__svg22">
                <img
                  className="farm__house__feature__section__waeaper__images"
                  src={first23}
                  alt=""
                />
                <div className="s">sds</div>
              </div>
            </div>
            <div className="farm__house__feature__section__waeaper__svg__two">
              <div className="farm__house__feature__section__waeaper__svg">
                <img
                  className="farm__house__feature__section__waeaper__image"
                  src={first2}
                  alt=""
                />
              </div>
              <div className="farm__house__feature__section__waeaper__svg22">
                <img
                  className="farm__house__feature__section__waeaper__images"
                  src={first23}
                  alt=""
                />
              </div>
            </div>
            <div className="farm__house__feature__section__waeaper__svg__two">
              <div className="farm__house__feature__section__waeaper__svg">
                <img
                  className="farm__house__feature__section__waeaper__image"
                  src={first}
                  alt=""
                />
              </div>
              <div className="farm__house__feature__section__waeaper__svg22">
                <img
                  className="farm__house__feature__section__waeaper__images"
                  src={first23}
                  alt=""
                />
              </div>
            </div>
            <div className="farm__house__feature__section__waeaper__svg__two">
              <div className="farm__house__feature__section__waeaper__svg">
                <img
                  className="farm__house__feature__section__waeaper__image"
                  src={first}
                  alt=""
                />
              </div>
              <div className="farm__house__feature__section__waeaper__svg22">
                <img
                  className="farm__house__feature__section__waeaper__images"
                  src={first23}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="Form__House">
        <div className="farm__background">
          <img src={farmbackground} alt="farmbackground " />
        </div>
        <div className="farm__house__content__overlay">
          <div className="farm__house__content__heading">
            Farm House Feature
          </div>
          <div className="farm__house__content__twopart">
            {" "}
            <div className="farm__house__content__part__one">
              <div className="farm__house__content__one">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
              <div className="farm__house__content__two">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
              <div className="farm__house__content__three">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
              <div className="farm__house__content__four">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
            </div>
            <div className="farm__house__content__part__two">
              <div className="farm__house__content__five">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
              <div className="farm__house__content__six">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
              <div className="farm__house__content__seven">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
              <div className="farm__house__content__eight">
                <div className="farm__house__content__one__svg">
                  <svg
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.39062 3.68311H67.8924M3.39062 55.8988H67.8924M35.6415 3.68311V55.8988M49.4633 23.6479V35.934M7.99789 3.68311H63.2851V55.8988H7.99789V3.68311Z"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8565 28.2552L49.4638 23.6479L54.071 28.2552M21.8202 35.934V23.6479M21.8202 35.934L17.2129 31.3267M21.8202 35.934L26.4274 31.3267"
                      stroke="#B29C3F"
                      strokeWidth="6.14302"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="farm__house__content__one__heading">
                  Elevator
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
