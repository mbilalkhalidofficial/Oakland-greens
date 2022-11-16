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
              <div className="feature__content__card__info">
                {" "}
                Epicurean Delights
              </div>
            </div>
            <div className="feature__content__card__para">
              The natural Agro farms at Oakland Green spread out wide as far as
              one can see presenting soothing sceneries. We offer you a
              lifestyle that at its best. The wide-spread and lush green Agro
              farmsthe best of the both worlds - serenity of the organic life &
              luxury of the modern world.
              <industry className="lorem20"></industry>
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
              <div className="feature__content__card__info">Sports Complex</div>
            </div>
            <div className="feature__content__card__para">
              Oakland Greens has a state-of-the-art sports complex equipped with
              both indoor & outdoor facilities. It has basketball court, tennis
              court, table tennis, football ground, indoor & outdoor facilities.
              cricket ground & swimming pools, all of which are well lit to be
              accessed during the night time.
              <industry className="lorem20"></industry>
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
              <div className="feature__content__card__info">Water Sports</div>
            </div>
            <div className="feature__content__card__para">
              Oakland Greens has in place some splashy sports for a perfect
              holiday experience. We are offering some safe yet adventurous
              aqua-sports to ensure that you & your family have an exciting time
              splashing around in crystal clear waters as per the ASTM standards
              of safety.
              <industry className="lorem20"></industry>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
