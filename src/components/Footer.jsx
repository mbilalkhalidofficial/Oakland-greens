import React from "react";
import footerbackground from "../assets/footer-background.png";
import footeroverlay from "../assets/footer-overlayimg.png";

export default function Footer() {
  return (
    <>
      <section id="Contact" className="Footer">
        <div className="footer__background">
          <img src={footerbackground} alt="footerbackground" />
        </div>
        <div className="footer__content">
          <div className="footer__content__background">
            <img src={footeroverlay} alt="footeroverlay" />
          </div>
          <div className="footer__content__all">
            <div className="footer__content__left">
              <div className="footer__content__left__heading">
                Most luxury houses for more discering
              </div>
              <div className="footer__content__left__all__link">
                <div className="footer__content__left__all__link__one">
                  <div className="footer__content__left__all__link__one__svg">
                    <svg
                      width="19"
                      height="26"
                      viewBox="0 0 19 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.69116 0.0948332C5.67406 0.438377 4.06922 1.26288 2.66069 2.67142C1.02149 4.3057 0.138094 6.33262 0.0104918 8.73252C-0.0876637 10.5435 0.501269 12.6636 1.846 15.3286C2.99933 17.6107 4.47166 19.8683 6.46912 22.4252C7.51939 23.7699 8.45186 24.8693 8.66781 25.0116C8.89847 25.1687 9.33036 25.1687 9.56102 25.0116C9.89475 24.7908 11.9511 22.2485 13.1142 20.6339C15.7399 16.9727 17.5018 13.5078 18.0171 10.9754C18.1987 10.0871 18.2576 9.43433 18.2183 8.73252C18.0907 6.33262 17.2073 4.3057 15.5681 2.67142C14.1351 1.23344 12.4615 0.394207 10.4101 0.0752021C9.72298 -0.0327689 8.37334 -0.0229534 7.69116 0.0948332ZM10.3659 4.72777C11.3474 5.02224 12.1376 5.57191 12.7462 6.3866C13.7768 7.76078 13.9437 9.51776 13.1879 11.0686C12.7364 11.9962 12.0198 12.7176 11.1021 13.1741C10.5033 13.4734 10.0076 13.5961 9.28619 13.6256C8.81995 13.6452 8.5991 13.6305 8.23101 13.552C5.62008 13.0121 4.00542 10.357 4.7514 7.82949C5.23236 6.20501 6.52311 5.02224 8.23592 4.63453C8.75124 4.51674 9.81622 4.56582 10.3659 4.72777Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="footer__content__left__all__link__one__text">
                    Sector 'A' Phase - VI Sector A DHA Phase 6, Lahore, Punjab
                    54810
                  </div>
                </div>
                <div className="footer__content__left__all__link__one">
                  <div className="footer__content__left__all__link__one__svg">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8927 15.5951C19.8927 15.9337 19.8143 16.2817 19.6477 16.6203C19.481 16.9589 19.2654 17.2786 18.9811 17.5796C18.5007 18.0875 17.9714 18.4542 17.3734 18.6894C16.7852 18.9245 16.148 19.0468 15.4618 19.0468C14.462 19.0468 13.3934 18.821 12.2661 18.3602C11.1388 17.8994 10.0114 17.2786 8.89392 16.498C7.76659 15.708 6.69808 14.8333 5.67858 13.8646C4.66888 12.8865 3.75721 11.8614 2.94358 10.7892C2.13974 9.71703 1.49275 8.64486 1.02221 7.5821C0.551675 6.50993 0.316406 5.48479 0.316406 4.50667C0.316406 3.86713 0.434041 3.25581 0.66931 2.69151C0.904578 2.11781 1.27709 1.59113 1.79664 1.12088C2.42402 0.528371 3.11022 0.236816 3.83564 0.236816C4.11012 0.236816 4.3846 0.293246 4.62967 0.406106C4.88454 0.518966 5.11001 0.688255 5.28646 0.932784L7.56073 4.00821C7.73718 4.24333 7.86462 4.45965 7.95284 4.66656C8.04107 4.86406 8.09008 5.06157 8.09008 5.24026C8.09008 5.46598 8.02146 5.6917 7.88422 5.90801C7.75679 6.12433 7.57053 6.35005 7.33526 6.57577L6.59024 7.31876C6.48241 7.42221 6.4334 7.54448 6.4334 7.69496C6.4334 7.7702 6.4432 7.83603 6.46281 7.91127C6.49222 7.98651 6.52162 8.04294 6.54123 8.09937C6.71768 8.40974 7.02157 8.81415 7.4529 9.30321C7.89403 9.79227 8.36456 10.2907 8.87431 10.7892C9.40367 11.2877 9.91342 11.7485 10.433 12.1717C10.9427 12.5855 11.3642 12.8677 11.6975 13.037C11.7466 13.0558 11.8054 13.084 11.874 13.1122C11.9524 13.1404 12.0308 13.1498 12.1191 13.1498C12.2857 13.1498 12.4131 13.0934 12.521 12.99L13.266 12.2846C13.5111 12.0495 13.7463 11.8708 13.9718 11.7579C14.1973 11.6262 14.4227 11.5604 14.6678 11.5604C14.8541 11.5604 15.0501 11.598 15.2658 11.6827C15.4814 11.7673 15.7069 11.8896 15.952 12.0495L19.1967 14.2596C19.4516 14.4289 19.6281 14.6264 19.7359 14.8615C19.8339 15.0967 19.8927 15.3318 19.8927 15.5951Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="footer__content__left__all__link__one__text">
                    0300-1234567
                  </div>
                </div>
                <div className="footer__content__left__all__link__one">
                  <div className="footer__content__left__all__link__one__svg">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1511 20.2399H7.06339C4.03708 20.2399 2.01953 18.8024 2.01953 15.4482V8.73991C2.01953 5.38574 4.03708 3.94824 7.06339 3.94824H17.1511C20.1774 3.94824 22.195 5.38574 22.195 8.73991V15.4482C22.195 18.8024 20.1774 20.2399 17.1511 20.2399Z"
                        fill="white"
                        stroke="#B29C3F"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.1444 9.21924L13.9869 11.6151C12.9479 12.4009 11.243 12.4009 10.204 11.6151L7.05664 9.21924"
                        fill="white"
                      />
                      <path
                        d="M17.1444 9.21924L13.9869 11.6151C12.9479 12.4009 11.243 12.4009 10.204 11.6151L7.05664 9.21924"
                        stroke="#B29C3F"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="footer__content__left__all__link__one__text">
                    abc123@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__content__right">
              <div className="footer__content__right__form">
                <div className="footer__content__right__form__input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="footer__content__right__form__input">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="footer__content__right__form__input">
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="Number"
                  />
                </div>
                <div className="footer__content__right__form__input__msg">
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Message"
                  />
                </div>
                <div className="footer__content__right__form__button">
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
