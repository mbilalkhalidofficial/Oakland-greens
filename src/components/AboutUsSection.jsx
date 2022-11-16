import React from "react";
import aboutfirst from "../assets/aboutfirst.png";
import aboutsecond from "../assets/aboutsecond.png";
import aboutlast from "../assets/aboutlast.png";

export function AboutUsSection() {
  return (
    <section id="first__section__header" className="about__section">
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
              The unmatched rustic life experience The natural Agro farms at
              Oakland Green spread out wide as far as one can see presenting
              soothing sceneries. We offer you a lifestyle that provides the
              serenity at its best. The wide-spread and lush green Agro farms
              provide the best of the both worlds - serenity of the organic life
              & luxury of the modern world. As we ensure to have something for
              everyone, so we have the Agro farms where you can have the best
              gardening experience. Visit the Agro farms vegetable garden and
              pick your own produce.
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
    </section>
  );
}
