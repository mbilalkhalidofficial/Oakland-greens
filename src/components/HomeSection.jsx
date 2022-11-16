import React from "react";
import { NavLink } from "react-router-dom";
import headerback2 from "../assets/headerback2.png";
import oaklandlogo from "../assets/oaklandlogo.png";
import { Menu, X } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export function HomeSection() {
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
    <section id="home" className="oakland_section">
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
                <Fade bottom>
                  <a href="#home" className="navbar__style">
                    Home
                  </a>
                  <a href="#first__section__header" className="navbar__style">
                    About Us
                  </a>
                  <a href="#feature" className="navbar__style">
                    Features
                  </a>
                  <a href="#contact" className="navbar__style">
                    Contact Us
                  </a>
                </Fade>{" "}
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
            <Fade bottom duration={2000}>
              <div className="oakland_section__weaper__overlay__entry">
                <div className="oakland_section__weaper__overlay__main_heading">
                  Most luxury houses for more discering Customers
                </div>
                <div className="oakland_section__weaper__overlay__main_heading__para">
                  Oakland Greens is a hidden gem nestled in the pristine lands
                  of Taxila, spread over hectares in this both historically rich
                  and modern site. We ensure you enjoy a serene and luxurious
                  stay in the heart of an idyllic setting and preserved
                  heritage. Experience the peace and quiet of the wooded parks
                  and stroll through the paths of the tree lined lush lands,
                  with its aromatic scents and varied flora, typical of the
                  capital.
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
            </Fade>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
