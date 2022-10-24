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
import { Menu, X } from "react-feather";

import first from "../assets/first.svg";
import first2 from "../assets/first2.svg";
import first3 from "../assets/first3.svg";
import firstfour from "../assets/firstfour.svg";
import first23 from "../assets/first23.svg";
import swiperpic from "../assets/swiperpic.png";
import { useNavigate } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useLayoutEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Header() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    function navStatus() {
      if (window.innerWidth < 1100) {
        setActive(false);
      } else {
        setActive(true);
      }
    }
    navStatus();
    window.addEventListener("resize", navStatus);
  }, []);
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

              {active ? (
                <div
                  navigate={navigate}
                  setActive={setActive}
                  className="oakland_section__weaper__overlay__navbar__right"
                >
                  <NavLink className="navbar__style">Home</NavLink>
                  <NavLink className="navbar__style">About Us</NavLink>
                  <NavLink className="navbar__style">Features</NavLink>
                  <NavLink className="navbar__style">Contact Us</NavLink>
                </div>
              ) : null}
              <button
                className="menu__btn"
                onClick={() => {
                  setActive(!active);
                }}
              >
                {active ? (
                  <X width={30} color="#b29c3f" />
                ) : (
                  <Menu width={30} color="#b29c3f" />
                )}
              </button>
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

      <div id="first__section__header" className="about__section">
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
          <div className="s">
            <div>
              <img
                className="farmhouse__swiper__picture"
                src={swiperpic}
                alt=""
              />
            </div>
            <div className="famhouse__swiper__card__entry">
              <div className="famhouse__swiper__card__entry___left">
                <div className="famhouse__swiper__card__entry__left__heading">
                  100.000 $
                </div>
                <div className="famhouse__swiper__card__entry__left__flex">
                  <div className="famhouse__swiper__card__entry___left__text">
                    535 sq ft{" "}
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6262 0.638184C15.3878 0.638066 16.121 0.927663 16.677 1.44823C17.233 1.9688 17.5702 2.68136 17.6202 3.44138L17.6262 3.63818V6.69818C18.2692 6.82969 18.8513 7.16835 19.2835 7.66229C19.7157 8.15622 19.974 8.77821 20.019 9.43298L20.0262 9.63818V16.8382C20.0264 16.9881 19.9706 17.1327 19.8696 17.2435C19.7685 17.3543 19.6297 17.4233 19.4804 17.4368C19.3311 17.4504 19.1821 17.4075 19.0628 17.3167C18.9435 17.2259 18.8625 17.0937 18.8358 16.9462L18.8262 16.8382V13.8382H2.02617V16.8382C2.02645 16.9881 1.97058 17.1327 1.86956 17.2435C1.76855 17.3543 1.62971 17.4233 1.48039 17.4368C1.33106 17.4504 1.18208 17.4075 1.06277 17.3167C0.943467 17.2259 0.862484 17.0937 0.835772 16.9462L0.826172 16.8382V9.63818C0.826031 8.94659 1.06484 8.27619 1.50219 7.74044C1.93953 7.20469 2.54855 6.8365 3.22617 6.69818V3.63818C3.22605 2.87652 3.51565 2.14333 4.03622 1.58733C4.55679 1.03133 5.26935 0.694149 6.02937 0.644184L6.22617 0.638184H14.6262ZM17.0262 7.83818H3.82617C3.3789 7.83818 2.94765 8.00469 2.61644 8.30528C2.28524 8.60587 2.07781 9.01901 2.03457 9.46418L2.02617 9.63818V12.6382H18.8262V9.63818C18.8262 9.19091 18.6597 8.75966 18.3591 8.42845C18.0585 8.09725 17.6453 7.88982 17.2002 7.84658L17.0262 7.83818ZM14.6262 1.83818H6.22617C5.77871 1.83821 5.3473 2.00489 5.01607 2.30573C4.68484 2.60657 4.47753 3.01999 4.43457 3.46538L4.42617 3.63818V6.63818H5.62617V6.03818C5.62617 5.87905 5.68939 5.72644 5.80191 5.61392C5.91443 5.5014 6.06704 5.43818 6.22617 5.43818H9.22617C9.3853 5.43818 9.53791 5.5014 9.65044 5.61392C9.76296 5.72644 9.82617 5.87905 9.82617 6.03818V6.63818H11.0262V6.03818C11.0262 5.87905 11.0894 5.72644 11.2019 5.61392C11.3144 5.5014 11.467 5.43818 11.6262 5.43818H14.6262C14.7853 5.43818 14.9379 5.5014 15.0504 5.61392C15.163 5.72644 15.2262 5.87905 15.2262 6.03818V6.63818H16.4262V3.63818C16.4262 3.19091 16.2597 2.75966 15.9591 2.42845C15.6585 2.09725 15.2453 1.88982 14.8002 1.84658L14.6262 1.83818Z"
                          fill="#3A3939"
                        />
                      </svg>{" "}
                    </div>
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      4 Bedrooms
                    </div>
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 13.1631H3.75V4.72559C3.74913 4.40784 3.81129 4.09307 3.9329 3.79951C4.0545 3.50594 4.23312 3.23942 4.45842 3.01535L4.47717 2.9966C4.83026 2.64403 5.2836 2.40906 5.77524 2.32381C6.26688 2.23855 6.77286 2.30716 7.22405 2.52026C6.79794 3.22872 6.62083 4.05927 6.72086 4.87993C6.82089 5.7006 7.19233 6.46428 7.77614 7.04965L8.28947 7.56298L7.34461 8.50788L8.4052 9.56848L9.35006 8.62362L14.5855 3.38829L15.5303 2.44343L14.4697 1.38279L13.5248 2.32765L13.0115 1.81432C12.3969 1.20144 11.5867 0.823644 10.7222 0.746757C9.85764 0.66987 8.99353 0.898771 8.28042 1.39357C7.52846 0.918686 6.63734 0.713675 5.75346 0.812215C4.86958 0.910756 4.04549 1.30699 3.41658 1.93582L3.39783 1.95457C3.03279 2.31761 2.74338 2.74946 2.54635 3.2251C2.34933 3.70075 2.2486 4.21075 2.25 4.72559V13.1631H0.75V14.6631H2.25V16.1021C2.24997 16.2231 2.26947 16.3432 2.30775 16.4579L3.70312 20.6438C3.77759 20.8679 3.92078 21.0629 4.11235 21.201C4.30392 21.3391 4.53413 21.4133 4.77028 21.4131H5.37497L4.82812 23.2881H6.39061L6.9375 21.4131H16.6922L17.2547 23.2881H18.8203L18.2578 21.4131H19.2295C19.4657 21.4133 19.696 21.3391 19.8876 21.201C20.0792 21.0629 20.2224 20.868 20.2969 20.6438L21.6922 16.4579C21.7304 16.3432 21.75 16.2231 21.75 16.1021V14.6631H23.25V13.1631H21.75ZM8.83687 2.87496C9.25012 2.46261 9.81007 2.23103 10.3939 2.23103C10.9776 2.23103 11.5376 2.46261 11.9508 2.87496L12.4641 3.38829L9.3502 6.50215L8.83687 5.98891C8.42455 5.57565 8.19298 5.01571 8.19298 4.43194C8.19298 3.84816 8.42455 3.28822 8.83687 2.87496ZM20.25 16.0412L18.9594 19.9131H5.04056L3.75 16.0412V14.6631H20.25V16.0412Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div>1 swimming</div>
                  </div>
                </div>
              </div>
              <div className="famhouse__swiper__card__entry__right">
                Enquire
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <div className="s">
            <div>
              <img
                className="farmhouse__swiper__picture"
                src={swiperpic}
                alt=""
              />
            </div>
            <div className="famhouse__swiper__card__entry">
              <div className="famhouse__swiper__card__entry___left">
                <div className="famhouse__swiper__card__entry__left__heading">
                  100.000 $
                </div>
                <div className="famhouse__swiper__card__entry__left__flex">
                  <div className="famhouse__swiper__card__entry___left__text">
                    535 sq ft{" "}
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6262 0.638184C15.3878 0.638066 16.121 0.927663 16.677 1.44823C17.233 1.9688 17.5702 2.68136 17.6202 3.44138L17.6262 3.63818V6.69818C18.2692 6.82969 18.8513 7.16835 19.2835 7.66229C19.7157 8.15622 19.974 8.77821 20.019 9.43298L20.0262 9.63818V16.8382C20.0264 16.9881 19.9706 17.1327 19.8696 17.2435C19.7685 17.3543 19.6297 17.4233 19.4804 17.4368C19.3311 17.4504 19.1821 17.4075 19.0628 17.3167C18.9435 17.2259 18.8625 17.0937 18.8358 16.9462L18.8262 16.8382V13.8382H2.02617V16.8382C2.02645 16.9881 1.97058 17.1327 1.86956 17.2435C1.76855 17.3543 1.62971 17.4233 1.48039 17.4368C1.33106 17.4504 1.18208 17.4075 1.06277 17.3167C0.943467 17.2259 0.862484 17.0937 0.835772 16.9462L0.826172 16.8382V9.63818C0.826031 8.94659 1.06484 8.27619 1.50219 7.74044C1.93953 7.20469 2.54855 6.8365 3.22617 6.69818V3.63818C3.22605 2.87652 3.51565 2.14333 4.03622 1.58733C4.55679 1.03133 5.26935 0.694149 6.02937 0.644184L6.22617 0.638184H14.6262ZM17.0262 7.83818H3.82617C3.3789 7.83818 2.94765 8.00469 2.61644 8.30528C2.28524 8.60587 2.07781 9.01901 2.03457 9.46418L2.02617 9.63818V12.6382H18.8262V9.63818C18.8262 9.19091 18.6597 8.75966 18.3591 8.42845C18.0585 8.09725 17.6453 7.88982 17.2002 7.84658L17.0262 7.83818ZM14.6262 1.83818H6.22617C5.77871 1.83821 5.3473 2.00489 5.01607 2.30573C4.68484 2.60657 4.47753 3.01999 4.43457 3.46538L4.42617 3.63818V6.63818H5.62617V6.03818C5.62617 5.87905 5.68939 5.72644 5.80191 5.61392C5.91443 5.5014 6.06704 5.43818 6.22617 5.43818H9.22617C9.3853 5.43818 9.53791 5.5014 9.65044 5.61392C9.76296 5.72644 9.82617 5.87905 9.82617 6.03818V6.63818H11.0262V6.03818C11.0262 5.87905 11.0894 5.72644 11.2019 5.61392C11.3144 5.5014 11.467 5.43818 11.6262 5.43818H14.6262C14.7853 5.43818 14.9379 5.5014 15.0504 5.61392C15.163 5.72644 15.2262 5.87905 15.2262 6.03818V6.63818H16.4262V3.63818C16.4262 3.19091 16.2597 2.75966 15.9591 2.42845C15.6585 2.09725 15.2453 1.88982 14.8002 1.84658L14.6262 1.83818Z"
                          fill="#3A3939"
                        />
                      </svg>{" "}
                    </div>
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      4 Bedrooms
                    </div>
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 13.1631H3.75V4.72559C3.74913 4.40784 3.81129 4.09307 3.9329 3.79951C4.0545 3.50594 4.23312 3.23942 4.45842 3.01535L4.47717 2.9966C4.83026 2.64403 5.2836 2.40906 5.77524 2.32381C6.26688 2.23855 6.77286 2.30716 7.22405 2.52026C6.79794 3.22872 6.62083 4.05927 6.72086 4.87993C6.82089 5.7006 7.19233 6.46428 7.77614 7.04965L8.28947 7.56298L7.34461 8.50788L8.4052 9.56848L9.35006 8.62362L14.5855 3.38829L15.5303 2.44343L14.4697 1.38279L13.5248 2.32765L13.0115 1.81432C12.3969 1.20144 11.5867 0.823644 10.7222 0.746757C9.85764 0.66987 8.99353 0.898771 8.28042 1.39357C7.52846 0.918686 6.63734 0.713675 5.75346 0.812215C4.86958 0.910756 4.04549 1.30699 3.41658 1.93582L3.39783 1.95457C3.03279 2.31761 2.74338 2.74946 2.54635 3.2251C2.34933 3.70075 2.2486 4.21075 2.25 4.72559V13.1631H0.75V14.6631H2.25V16.1021C2.24997 16.2231 2.26947 16.3432 2.30775 16.4579L3.70312 20.6438C3.77759 20.8679 3.92078 21.0629 4.11235 21.201C4.30392 21.3391 4.53413 21.4133 4.77028 21.4131H5.37497L4.82812 23.2881H6.39061L6.9375 21.4131H16.6922L17.2547 23.2881H18.8203L18.2578 21.4131H19.2295C19.4657 21.4133 19.696 21.3391 19.8876 21.201C20.0792 21.0629 20.2224 20.868 20.2969 20.6438L21.6922 16.4579C21.7304 16.3432 21.75 16.2231 21.75 16.1021V14.6631H23.25V13.1631H21.75ZM8.83687 2.87496C9.25012 2.46261 9.81007 2.23103 10.3939 2.23103C10.9776 2.23103 11.5376 2.46261 11.9508 2.87496L12.4641 3.38829L9.3502 6.50215L8.83687 5.98891C8.42455 5.57565 8.19298 5.01571 8.19298 4.43194C8.19298 3.84816 8.42455 3.28822 8.83687 2.87496ZM20.25 16.0412L18.9594 19.9131H5.04056L3.75 16.0412V14.6631H20.25V16.0412Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div>1 swimming</div>
                  </div>
                </div>
              </div>
              <div className="famhouse__swiper__card__entry__right">
                Enquire
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <div className="s">
            <div>
              <img
                className="farmhouse__swiper__picture"
                src={swiperpic}
                alt=""
              />
            </div>
            <div className="famhouse__swiper__card__entry">
              <div className="famhouse__swiper__card__entry___left">
                <div className="famhouse__swiper__card__entry__left__heading">
                  100.000 $
                </div>
                <div className="famhouse__swiper__card__entry__left__flex">
                  <div className="famhouse__swiper__card__entry___left__text">
                    535 sq ft{" "}
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6262 0.638184C15.3878 0.638066 16.121 0.927663 16.677 1.44823C17.233 1.9688 17.5702 2.68136 17.6202 3.44138L17.6262 3.63818V6.69818C18.2692 6.82969 18.8513 7.16835 19.2835 7.66229C19.7157 8.15622 19.974 8.77821 20.019 9.43298L20.0262 9.63818V16.8382C20.0264 16.9881 19.9706 17.1327 19.8696 17.2435C19.7685 17.3543 19.6297 17.4233 19.4804 17.4368C19.3311 17.4504 19.1821 17.4075 19.0628 17.3167C18.9435 17.2259 18.8625 17.0937 18.8358 16.9462L18.8262 16.8382V13.8382H2.02617V16.8382C2.02645 16.9881 1.97058 17.1327 1.86956 17.2435C1.76855 17.3543 1.62971 17.4233 1.48039 17.4368C1.33106 17.4504 1.18208 17.4075 1.06277 17.3167C0.943467 17.2259 0.862484 17.0937 0.835772 16.9462L0.826172 16.8382V9.63818C0.826031 8.94659 1.06484 8.27619 1.50219 7.74044C1.93953 7.20469 2.54855 6.8365 3.22617 6.69818V3.63818C3.22605 2.87652 3.51565 2.14333 4.03622 1.58733C4.55679 1.03133 5.26935 0.694149 6.02937 0.644184L6.22617 0.638184H14.6262ZM17.0262 7.83818H3.82617C3.3789 7.83818 2.94765 8.00469 2.61644 8.30528C2.28524 8.60587 2.07781 9.01901 2.03457 9.46418L2.02617 9.63818V12.6382H18.8262V9.63818C18.8262 9.19091 18.6597 8.75966 18.3591 8.42845C18.0585 8.09725 17.6453 7.88982 17.2002 7.84658L17.0262 7.83818ZM14.6262 1.83818H6.22617C5.77871 1.83821 5.3473 2.00489 5.01607 2.30573C4.68484 2.60657 4.47753 3.01999 4.43457 3.46538L4.42617 3.63818V6.63818H5.62617V6.03818C5.62617 5.87905 5.68939 5.72644 5.80191 5.61392C5.91443 5.5014 6.06704 5.43818 6.22617 5.43818H9.22617C9.3853 5.43818 9.53791 5.5014 9.65044 5.61392C9.76296 5.72644 9.82617 5.87905 9.82617 6.03818V6.63818H11.0262V6.03818C11.0262 5.87905 11.0894 5.72644 11.2019 5.61392C11.3144 5.5014 11.467 5.43818 11.6262 5.43818H14.6262C14.7853 5.43818 14.9379 5.5014 15.0504 5.61392C15.163 5.72644 15.2262 5.87905 15.2262 6.03818V6.63818H16.4262V3.63818C16.4262 3.19091 16.2597 2.75966 15.9591 2.42845C15.6585 2.09725 15.2453 1.88982 14.8002 1.84658L14.6262 1.83818Z"
                          fill="#3A3939"
                        />
                      </svg>{" "}
                    </div>
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      4 Bedrooms
                    </div>
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 13.1631H3.75V4.72559C3.74913 4.40784 3.81129 4.09307 3.9329 3.79951C4.0545 3.50594 4.23312 3.23942 4.45842 3.01535L4.47717 2.9966C4.83026 2.64403 5.2836 2.40906 5.77524 2.32381C6.26688 2.23855 6.77286 2.30716 7.22405 2.52026C6.79794 3.22872 6.62083 4.05927 6.72086 4.87993C6.82089 5.7006 7.19233 6.46428 7.77614 7.04965L8.28947 7.56298L7.34461 8.50788L8.4052 9.56848L9.35006 8.62362L14.5855 3.38829L15.5303 2.44343L14.4697 1.38279L13.5248 2.32765L13.0115 1.81432C12.3969 1.20144 11.5867 0.823644 10.7222 0.746757C9.85764 0.66987 8.99353 0.898771 8.28042 1.39357C7.52846 0.918686 6.63734 0.713675 5.75346 0.812215C4.86958 0.910756 4.04549 1.30699 3.41658 1.93582L3.39783 1.95457C3.03279 2.31761 2.74338 2.74946 2.54635 3.2251C2.34933 3.70075 2.2486 4.21075 2.25 4.72559V13.1631H0.75V14.6631H2.25V16.1021C2.24997 16.2231 2.26947 16.3432 2.30775 16.4579L3.70312 20.6438C3.77759 20.8679 3.92078 21.0629 4.11235 21.201C4.30392 21.3391 4.53413 21.4133 4.77028 21.4131H5.37497L4.82812 23.2881H6.39061L6.9375 21.4131H16.6922L17.2547 23.2881H18.8203L18.2578 21.4131H19.2295C19.4657 21.4133 19.696 21.3391 19.8876 21.201C20.0792 21.0629 20.2224 20.868 20.2969 20.6438L21.6922 16.4579C21.7304 16.3432 21.75 16.2231 21.75 16.1021V14.6631H23.25V13.1631H21.75ZM8.83687 2.87496C9.25012 2.46261 9.81007 2.23103 10.3939 2.23103C10.9776 2.23103 11.5376 2.46261 11.9508 2.87496L12.4641 3.38829L9.3502 6.50215L8.83687 5.98891C8.42455 5.57565 8.19298 5.01571 8.19298 4.43194C8.19298 3.84816 8.42455 3.28822 8.83687 2.87496ZM20.25 16.0412L18.9594 19.9131H5.04056L3.75 16.0412V14.6631H20.25V16.0412Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div>1 swimming</div>
                  </div>
                </div>
              </div>
              <div className="famhouse__swiper__card__entry__right">
                Enquire
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <div className="s">
            <div>
              <img
                className="farmhouse__swiper__picture"
                src={swiperpic}
                alt=""
              />
            </div>
            <div className="famhouse__swiper__card__entry">
              <div className="famhouse__swiper__card__entry___left">
                <div className="famhouse__swiper__card__entry__left__heading">
                  100.000 $
                </div>
                <div className="famhouse__swiper__card__entry__left__flex">
                  <div className="famhouse__swiper__card__entry___left__text">
                    535 sq ft{" "}
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6262 0.638184C15.3878 0.638066 16.121 0.927663 16.677 1.44823C17.233 1.9688 17.5702 2.68136 17.6202 3.44138L17.6262 3.63818V6.69818C18.2692 6.82969 18.8513 7.16835 19.2835 7.66229C19.7157 8.15622 19.974 8.77821 20.019 9.43298L20.0262 9.63818V16.8382C20.0264 16.9881 19.9706 17.1327 19.8696 17.2435C19.7685 17.3543 19.6297 17.4233 19.4804 17.4368C19.3311 17.4504 19.1821 17.4075 19.0628 17.3167C18.9435 17.2259 18.8625 17.0937 18.8358 16.9462L18.8262 16.8382V13.8382H2.02617V16.8382C2.02645 16.9881 1.97058 17.1327 1.86956 17.2435C1.76855 17.3543 1.62971 17.4233 1.48039 17.4368C1.33106 17.4504 1.18208 17.4075 1.06277 17.3167C0.943467 17.2259 0.862484 17.0937 0.835772 16.9462L0.826172 16.8382V9.63818C0.826031 8.94659 1.06484 8.27619 1.50219 7.74044C1.93953 7.20469 2.54855 6.8365 3.22617 6.69818V3.63818C3.22605 2.87652 3.51565 2.14333 4.03622 1.58733C4.55679 1.03133 5.26935 0.694149 6.02937 0.644184L6.22617 0.638184H14.6262ZM17.0262 7.83818H3.82617C3.3789 7.83818 2.94765 8.00469 2.61644 8.30528C2.28524 8.60587 2.07781 9.01901 2.03457 9.46418L2.02617 9.63818V12.6382H18.8262V9.63818C18.8262 9.19091 18.6597 8.75966 18.3591 8.42845C18.0585 8.09725 17.6453 7.88982 17.2002 7.84658L17.0262 7.83818ZM14.6262 1.83818H6.22617C5.77871 1.83821 5.3473 2.00489 5.01607 2.30573C4.68484 2.60657 4.47753 3.01999 4.43457 3.46538L4.42617 3.63818V6.63818H5.62617V6.03818C5.62617 5.87905 5.68939 5.72644 5.80191 5.61392C5.91443 5.5014 6.06704 5.43818 6.22617 5.43818H9.22617C9.3853 5.43818 9.53791 5.5014 9.65044 5.61392C9.76296 5.72644 9.82617 5.87905 9.82617 6.03818V6.63818H11.0262V6.03818C11.0262 5.87905 11.0894 5.72644 11.2019 5.61392C11.3144 5.5014 11.467 5.43818 11.6262 5.43818H14.6262C14.7853 5.43818 14.9379 5.5014 15.0504 5.61392C15.163 5.72644 15.2262 5.87905 15.2262 6.03818V6.63818H16.4262V3.63818C16.4262 3.19091 16.2597 2.75966 15.9591 2.42845C15.6585 2.09725 15.2453 1.88982 14.8002 1.84658L14.6262 1.83818Z"
                          fill="#3A3939"
                        />
                      </svg>{" "}
                    </div>
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      4 Bedrooms
                    </div>
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 13.1631H3.75V4.72559C3.74913 4.40784 3.81129 4.09307 3.9329 3.79951C4.0545 3.50594 4.23312 3.23942 4.45842 3.01535L4.47717 2.9966C4.83026 2.64403 5.2836 2.40906 5.77524 2.32381C6.26688 2.23855 6.77286 2.30716 7.22405 2.52026C6.79794 3.22872 6.62083 4.05927 6.72086 4.87993C6.82089 5.7006 7.19233 6.46428 7.77614 7.04965L8.28947 7.56298L7.34461 8.50788L8.4052 9.56848L9.35006 8.62362L14.5855 3.38829L15.5303 2.44343L14.4697 1.38279L13.5248 2.32765L13.0115 1.81432C12.3969 1.20144 11.5867 0.823644 10.7222 0.746757C9.85764 0.66987 8.99353 0.898771 8.28042 1.39357C7.52846 0.918686 6.63734 0.713675 5.75346 0.812215C4.86958 0.910756 4.04549 1.30699 3.41658 1.93582L3.39783 1.95457C3.03279 2.31761 2.74338 2.74946 2.54635 3.2251C2.34933 3.70075 2.2486 4.21075 2.25 4.72559V13.1631H0.75V14.6631H2.25V16.1021C2.24997 16.2231 2.26947 16.3432 2.30775 16.4579L3.70312 20.6438C3.77759 20.8679 3.92078 21.0629 4.11235 21.201C4.30392 21.3391 4.53413 21.4133 4.77028 21.4131H5.37497L4.82812 23.2881H6.39061L6.9375 21.4131H16.6922L17.2547 23.2881H18.8203L18.2578 21.4131H19.2295C19.4657 21.4133 19.696 21.3391 19.8876 21.201C20.0792 21.0629 20.2224 20.868 20.2969 20.6438L21.6922 16.4579C21.7304 16.3432 21.75 16.2231 21.75 16.1021V14.6631H23.25V13.1631H21.75ZM8.83687 2.87496C9.25012 2.46261 9.81007 2.23103 10.3939 2.23103C10.9776 2.23103 11.5376 2.46261 11.9508 2.87496L12.4641 3.38829L9.3502 6.50215L8.83687 5.98891C8.42455 5.57565 8.19298 5.01571 8.19298 4.43194C8.19298 3.84816 8.42455 3.28822 8.83687 2.87496ZM20.25 16.0412L18.9594 19.9131H5.04056L3.75 16.0412V14.6631H20.25V16.0412Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div>1 swimming</div>
                  </div>
                </div>
              </div>
              <div className="famhouse__swiper__card__entry__right">
                Enquire
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <div className="s">
            <div>
              <img
                className="farmhouse__swiper__picture"
                src={swiperpic}
                alt=""
              />
            </div>
            <div className="famhouse__swiper__card__entry">
              <div className="famhouse__swiper__card__entry___left">
                <div className="famhouse__swiper__card__entry__left__heading">
                  100.000 $
                </div>
                <div className="famhouse__swiper__card__entry__left__flex">
                  <div className="famhouse__swiper__card__entry___left__text">
                    535 sq ft{" "}
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6262 0.638184C15.3878 0.638066 16.121 0.927663 16.677 1.44823C17.233 1.9688 17.5702 2.68136 17.6202 3.44138L17.6262 3.63818V6.69818C18.2692 6.82969 18.8513 7.16835 19.2835 7.66229C19.7157 8.15622 19.974 8.77821 20.019 9.43298L20.0262 9.63818V16.8382C20.0264 16.9881 19.9706 17.1327 19.8696 17.2435C19.7685 17.3543 19.6297 17.4233 19.4804 17.4368C19.3311 17.4504 19.1821 17.4075 19.0628 17.3167C18.9435 17.2259 18.8625 17.0937 18.8358 16.9462L18.8262 16.8382V13.8382H2.02617V16.8382C2.02645 16.9881 1.97058 17.1327 1.86956 17.2435C1.76855 17.3543 1.62971 17.4233 1.48039 17.4368C1.33106 17.4504 1.18208 17.4075 1.06277 17.3167C0.943467 17.2259 0.862484 17.0937 0.835772 16.9462L0.826172 16.8382V9.63818C0.826031 8.94659 1.06484 8.27619 1.50219 7.74044C1.93953 7.20469 2.54855 6.8365 3.22617 6.69818V3.63818C3.22605 2.87652 3.51565 2.14333 4.03622 1.58733C4.55679 1.03133 5.26935 0.694149 6.02937 0.644184L6.22617 0.638184H14.6262ZM17.0262 7.83818H3.82617C3.3789 7.83818 2.94765 8.00469 2.61644 8.30528C2.28524 8.60587 2.07781 9.01901 2.03457 9.46418L2.02617 9.63818V12.6382H18.8262V9.63818C18.8262 9.19091 18.6597 8.75966 18.3591 8.42845C18.0585 8.09725 17.6453 7.88982 17.2002 7.84658L17.0262 7.83818ZM14.6262 1.83818H6.22617C5.77871 1.83821 5.3473 2.00489 5.01607 2.30573C4.68484 2.60657 4.47753 3.01999 4.43457 3.46538L4.42617 3.63818V6.63818H5.62617V6.03818C5.62617 5.87905 5.68939 5.72644 5.80191 5.61392C5.91443 5.5014 6.06704 5.43818 6.22617 5.43818H9.22617C9.3853 5.43818 9.53791 5.5014 9.65044 5.61392C9.76296 5.72644 9.82617 5.87905 9.82617 6.03818V6.63818H11.0262V6.03818C11.0262 5.87905 11.0894 5.72644 11.2019 5.61392C11.3144 5.5014 11.467 5.43818 11.6262 5.43818H14.6262C14.7853 5.43818 14.9379 5.5014 15.0504 5.61392C15.163 5.72644 15.2262 5.87905 15.2262 6.03818V6.63818H16.4262V3.63818C16.4262 3.19091 16.2597 2.75966 15.9591 2.42845C15.6585 2.09725 15.2453 1.88982 14.8002 1.84658L14.6262 1.83818Z"
                          fill="#3A3939"
                        />
                      </svg>{" "}
                    </div>
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      4 Bedrooms
                    </div>
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 13.1631H3.75V4.72559C3.74913 4.40784 3.81129 4.09307 3.9329 3.79951C4.0545 3.50594 4.23312 3.23942 4.45842 3.01535L4.47717 2.9966C4.83026 2.64403 5.2836 2.40906 5.77524 2.32381C6.26688 2.23855 6.77286 2.30716 7.22405 2.52026C6.79794 3.22872 6.62083 4.05927 6.72086 4.87993C6.82089 5.7006 7.19233 6.46428 7.77614 7.04965L8.28947 7.56298L7.34461 8.50788L8.4052 9.56848L9.35006 8.62362L14.5855 3.38829L15.5303 2.44343L14.4697 1.38279L13.5248 2.32765L13.0115 1.81432C12.3969 1.20144 11.5867 0.823644 10.7222 0.746757C9.85764 0.66987 8.99353 0.898771 8.28042 1.39357C7.52846 0.918686 6.63734 0.713675 5.75346 0.812215C4.86958 0.910756 4.04549 1.30699 3.41658 1.93582L3.39783 1.95457C3.03279 2.31761 2.74338 2.74946 2.54635 3.2251C2.34933 3.70075 2.2486 4.21075 2.25 4.72559V13.1631H0.75V14.6631H2.25V16.1021C2.24997 16.2231 2.26947 16.3432 2.30775 16.4579L3.70312 20.6438C3.77759 20.8679 3.92078 21.0629 4.11235 21.201C4.30392 21.3391 4.53413 21.4133 4.77028 21.4131H5.37497L4.82812 23.2881H6.39061L6.9375 21.4131H16.6922L17.2547 23.2881H18.8203L18.2578 21.4131H19.2295C19.4657 21.4133 19.696 21.3391 19.8876 21.201C20.0792 21.0629 20.2224 20.868 20.2969 20.6438L21.6922 16.4579C21.7304 16.3432 21.75 16.2231 21.75 16.1021V14.6631H23.25V13.1631H21.75ZM8.83687 2.87496C9.25012 2.46261 9.81007 2.23103 10.3939 2.23103C10.9776 2.23103 11.5376 2.46261 11.9508 2.87496L12.4641 3.38829L9.3502 6.50215L8.83687 5.98891C8.42455 5.57565 8.19298 5.01571 8.19298 4.43194C8.19298 3.84816 8.42455 3.28822 8.83687 2.87496ZM20.25 16.0412L18.9594 19.9131H5.04056L3.75 16.0412V14.6631H20.25V16.0412Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div>1 swimming</div>
                  </div>
                </div>
              </div>
              <div className="famhouse__swiper__card__entry__right">
                Enquire
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="farmhouse__swiper">
          <div className="s">
            <div>
              <img
                className="farmhouse__swiper__picture"
                src={swiperpic}
                alt=""
              />
            </div>
            <div className="famhouse__swiper__card__entry">
              <div className="famhouse__swiper__card__entry___left">
                <div className="famhouse__swiper__card__entry__left__heading">
                  100.000 $
                </div>
                <div className="famhouse__swiper__card__entry__left__flex">
                  <div className="famhouse__swiper__card__entry___left__text">
                    535 sq ft{" "}
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6262 0.638184C15.3878 0.638066 16.121 0.927663 16.677 1.44823C17.233 1.9688 17.5702 2.68136 17.6202 3.44138L17.6262 3.63818V6.69818C18.2692 6.82969 18.8513 7.16835 19.2835 7.66229C19.7157 8.15622 19.974 8.77821 20.019 9.43298L20.0262 9.63818V16.8382C20.0264 16.9881 19.9706 17.1327 19.8696 17.2435C19.7685 17.3543 19.6297 17.4233 19.4804 17.4368C19.3311 17.4504 19.1821 17.4075 19.0628 17.3167C18.9435 17.2259 18.8625 17.0937 18.8358 16.9462L18.8262 16.8382V13.8382H2.02617V16.8382C2.02645 16.9881 1.97058 17.1327 1.86956 17.2435C1.76855 17.3543 1.62971 17.4233 1.48039 17.4368C1.33106 17.4504 1.18208 17.4075 1.06277 17.3167C0.943467 17.2259 0.862484 17.0937 0.835772 16.9462L0.826172 16.8382V9.63818C0.826031 8.94659 1.06484 8.27619 1.50219 7.74044C1.93953 7.20469 2.54855 6.8365 3.22617 6.69818V3.63818C3.22605 2.87652 3.51565 2.14333 4.03622 1.58733C4.55679 1.03133 5.26935 0.694149 6.02937 0.644184L6.22617 0.638184H14.6262ZM17.0262 7.83818H3.82617C3.3789 7.83818 2.94765 8.00469 2.61644 8.30528C2.28524 8.60587 2.07781 9.01901 2.03457 9.46418L2.02617 9.63818V12.6382H18.8262V9.63818C18.8262 9.19091 18.6597 8.75966 18.3591 8.42845C18.0585 8.09725 17.6453 7.88982 17.2002 7.84658L17.0262 7.83818ZM14.6262 1.83818H6.22617C5.77871 1.83821 5.3473 2.00489 5.01607 2.30573C4.68484 2.60657 4.47753 3.01999 4.43457 3.46538L4.42617 3.63818V6.63818H5.62617V6.03818C5.62617 5.87905 5.68939 5.72644 5.80191 5.61392C5.91443 5.5014 6.06704 5.43818 6.22617 5.43818H9.22617C9.3853 5.43818 9.53791 5.5014 9.65044 5.61392C9.76296 5.72644 9.82617 5.87905 9.82617 6.03818V6.63818H11.0262V6.03818C11.0262 5.87905 11.0894 5.72644 11.2019 5.61392C11.3144 5.5014 11.467 5.43818 11.6262 5.43818H14.6262C14.7853 5.43818 14.9379 5.5014 15.0504 5.61392C15.163 5.72644 15.2262 5.87905 15.2262 6.03818V6.63818H16.4262V3.63818C16.4262 3.19091 16.2597 2.75966 15.9591 2.42845C15.6585 2.09725 15.2453 1.88982 14.8002 1.84658L14.6262 1.83818Z"
                          fill="#3A3939"
                        />
                      </svg>{" "}
                    </div>
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      4 Bedrooms
                    </div>
                  </div>
                  <div className="famhouse__swiper__card__entry___bottom entry">
                    <div className="famhouse__swiper__card__entry___bottom__svg">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 13.1631H3.75V4.72559C3.74913 4.40784 3.81129 4.09307 3.9329 3.79951C4.0545 3.50594 4.23312 3.23942 4.45842 3.01535L4.47717 2.9966C4.83026 2.64403 5.2836 2.40906 5.77524 2.32381C6.26688 2.23855 6.77286 2.30716 7.22405 2.52026C6.79794 3.22872 6.62083 4.05927 6.72086 4.87993C6.82089 5.7006 7.19233 6.46428 7.77614 7.04965L8.28947 7.56298L7.34461 8.50788L8.4052 9.56848L9.35006 8.62362L14.5855 3.38829L15.5303 2.44343L14.4697 1.38279L13.5248 2.32765L13.0115 1.81432C12.3969 1.20144 11.5867 0.823644 10.7222 0.746757C9.85764 0.66987 8.99353 0.898771 8.28042 1.39357C7.52846 0.918686 6.63734 0.713675 5.75346 0.812215C4.86958 0.910756 4.04549 1.30699 3.41658 1.93582L3.39783 1.95457C3.03279 2.31761 2.74338 2.74946 2.54635 3.2251C2.34933 3.70075 2.2486 4.21075 2.25 4.72559V13.1631H0.75V14.6631H2.25V16.1021C2.24997 16.2231 2.26947 16.3432 2.30775 16.4579L3.70312 20.6438C3.77759 20.8679 3.92078 21.0629 4.11235 21.201C4.30392 21.3391 4.53413 21.4133 4.77028 21.4131H5.37497L4.82812 23.2881H6.39061L6.9375 21.4131H16.6922L17.2547 23.2881H18.8203L18.2578 21.4131H19.2295C19.4657 21.4133 19.696 21.3391 19.8876 21.201C20.0792 21.0629 20.2224 20.868 20.2969 20.6438L21.6922 16.4579C21.7304 16.3432 21.75 16.2231 21.75 16.1021V14.6631H23.25V13.1631H21.75ZM8.83687 2.87496C9.25012 2.46261 9.81007 2.23103 10.3939 2.23103C10.9776 2.23103 11.5376 2.46261 11.9508 2.87496L12.4641 3.38829L9.3502 6.50215L8.83687 5.98891C8.42455 5.57565 8.19298 5.01571 8.19298 4.43194C8.19298 3.84816 8.42455 3.28822 8.83687 2.87496ZM20.25 16.0412L18.9594 19.9131H5.04056L3.75 16.0412V14.6631H20.25V16.0412Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div>1 swimming</div>
                  </div>
                </div>
              </div>
              <div className="famhouse__swiper__card__entry__right">
                Enquire
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>

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
                  Laundry Facilities
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
                  Walk In Closet
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
                  Fire Place{" "}
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
                  Laundry Facilities
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
                  Walk In Closet
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
                  Fire Place
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
