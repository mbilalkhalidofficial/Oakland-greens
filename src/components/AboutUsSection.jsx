import React from "react";
import aboutfirst from "../assets/aboutfirst.png";
import aboutsecond from "../assets/aboutsecond.png";
import aboutlast from "../assets/aboutlast.png";

export function AboutUsSection() {
  return (
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
            <div className="about__section__secondentry__heading">About Us</div>
            <div className="about__section__secondentry__para">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.Dream Home is a gated community with a great
              location. Located downtown, you’re within walking distance of
              Parks, and the best shopping, dining and entertainment Getting
              around is a breeze, with easy access to freeways, buses and
              trolleys. . Laundry is available on premises.
            </div>

            <div className="about__section__secondentry_card">
              <div className="about__section__secondentry_card__text">500+</div>
              <div className="about__section__secondentry_card__heading">
                Projects
              </div>
              <div className="about__section__secondentry_card__para">
                Over 500 lexury villas for“Home Away From Home” experience
              </div>
            </div>
            <div className="about__section__secondentry_card">
              <div className="about__section__secondentry_card__text">40+</div>
              <div className="about__section__secondentry_card__heading">
                Locations
              </div>
              <div className="about__section__secondentry_card__para">
                luxury villas and private holiday homes, from all across
              </div>
            </div>
            <div className="about__section__secondentry_card">
              <div className="about__section__secondentry_card__text">24/7</div>
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
            <div className="about__section__thirdentry__buttom">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
}
