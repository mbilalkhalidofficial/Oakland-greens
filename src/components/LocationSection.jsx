import React from "react";
import Fade from "react-reveal/Fade";

export function LocationSection() {
  return (
    <section id="loction" className="location">
      <Fade bottom>
        <div className="location__Section">
          <div className="location__Section__text">Our location</div>
          <div className="location__Section__para">
            At Oakland Greens you will get to reconnect with the peace and
            tranquility away from the hullabaloo of the city life. Spend those
            precious moments with your loved ones at our lavish farmhouses.
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
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Fade>{" "}
    </section>
  );
}
