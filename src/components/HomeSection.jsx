import React from "react";
import { NavLink } from "react-router-dom";
import headerback2 from "../assets/headerback2.png";
import oaklandlogo from "../assets/oaklandlogo.png";
import { Menu, X } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

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
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.
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
  );
}
