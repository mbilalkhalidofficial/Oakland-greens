import React from "react";
import map from "../assets/map.svg";
import map2 from "../assets/map2.svg";
import Fade from "react-reveal/Fade";

export function FeatureSectioin() {
  return (
    <section className="feature">
      <Fade top>
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
      </Fade>
    </section>
  );
}
