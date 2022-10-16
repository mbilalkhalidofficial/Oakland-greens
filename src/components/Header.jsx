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

export default function Header() {
  return (
    <>
      <div className="oakland_section">
        <div className="oakland_section__weaper">
          <div className="oakland_section__weaper__backimg">
            <img
              className="oakland_section__weaper__backimgs"
              src={headerback}
              alt=""
            />
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

            <div className="oakland_section__weaper__overlay__entry">
              <div className="oakland_section__weaper__overlay__main_heading">
                Most luxury houses for more discering Customers
              </div>
              <div className="oakland_section__weaper__overlay__main_heading__para">
                Dream Home is a gated community with a great location. Located
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.
              </div>
              <div className="oakland_section__weaper__overlay__two button">
                <div className="oakland_section__weaper__overlay__two__left">
                  {" "}
                  Read More{" "}
                </div>
                <div className="oakland_section__weaper__overlay__two__right">
                  {" "}
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerback__second">
          <img className="headerback__second__image" src={headerback2} alt="" />
        </div>
      </div>

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
              <img
                className="about__section__secondentry__image"
                src={aboutsecondbox}
                alt=""
              />
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
                {" "}
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
          <div className="about__section__thirdentry__buttom">Contact Us</div>
        </div>
      </div>
    </>
  );
}
