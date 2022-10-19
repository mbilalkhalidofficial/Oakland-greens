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
              Our luxury <span>upcoming</span> for more discering Customers
            </div>
            <div className="luxury__section__left__para">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </div>
            <div className="luxury__section__left__button">Read More</div>
          </div>
          <div className="luxury__section__right">
            <div className="luxury__section__right__img">
              <img
                className="luxury__section__right__image"
                src={luxury}
                alt=""
              />
            </div>
            <div className="luxury__section__right__imgs">
              <img
                className="luxury__section__right__image"
                src={luxury}
                alt=""
              />
            </div>
            <div className="luxury__section__right__imgss">
              <img
                className="luxury__section__right__image"
                src={luxury}
                alt=""
              />
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1208.3247925047367!2d72.95992991031669!3d31.06360773507335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f1a03288dd97%3A0xd774a67d9fa85858!2sCrazy%20Beings!5e0!3m2!1sen!2s!4v1666182994553!5m2!1sen!2s"
              loading="lazy"
              style={{
                width: "100%",
                height: 500,
                border: "none",
                margin: "4em 0em",
              }}
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}
