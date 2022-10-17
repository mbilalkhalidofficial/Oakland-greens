import React from "react";
import map from "../assets/map.png";
import luxury from "../assets/luxury.png";

export default function index() {
  return (
    <>
      <div className="luxury">
        <div className="luxury__section">
          <div className="luxury__section__left">
            <div className="luxury__section__left__heading">
         Our luxury  <span>upcoming</span> for more discering Customers
            </div>
            <div className="luxury__section__left__para">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </div>
            <div className="luxury__section__left__button">
            Read More
            </div>

          </div>
          <div className="luxury__section__right">
          <div className="luxury__section__right__img">
            <img className="luxury__section__right__image" src={luxury} alt="" />
          </div>
          <div className="luxury__section__right__imgs">
            <img className="luxury__section__right__image" src={luxury} alt="" />
          </div>
          <div className="luxury__section__right__imgss">
            <img className="luxury__section__right__image" src={luxury} alt="" />
          </div>
          </div>
        </div>
      </div>

      <div className="location">
        <div className="location__Section">
          <div className="location__Section__text">Our location</div>
          <div className="location__Section__para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry.
          </div>

          <div className="location__Section__img">
            <img className="location__Section__image" src={map} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
