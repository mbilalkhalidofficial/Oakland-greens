import React from "react";
import footerbackground from "../assets/footer-background.png";
import footeroverlay from "../assets/footer-overlayimg.png";
import footerlogo from "../assets/footer-logo.png";

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
          <div className="footer__bottom__content">
            <img
              src={footerlogo}
              alt="footerlogo"
              className="footer__bottom__content__logo"
            />
            <div className="footer__bottom__content__text">
              © 2020 okaland. All rights reserved.
            </div>
            <div className="footer__bottom__content__links">
              <div className="footer__bottom__content__link__svg">
                <svg
                  width="77"
                  height="91"
                  viewBox="0 0 77 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_253_2)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.1682 73.1835C53.6236 73.1835 66.1528 60.6544 66.1528 45.1989C66.1528 29.7435 53.6236 17.2144 38.1682 17.2144C22.7127 17.2144 10.1836 29.7435 10.1836 45.1989C10.1836 60.6544 22.7127 73.1835 38.1682 73.1835Z"
                      fill="white"
                    />
                    <path
                      d="M64.6528 45.1989C64.6528 59.826 52.7952 71.6835 38.1682 71.6835C23.5411 71.6835 11.6836 59.826 11.6836 45.1989C11.6836 30.5719 23.5411 18.7144 38.1682 18.7144C52.7952 18.7144 64.6528 30.5719 64.6528 45.1989Z"
                      stroke="white"
                      stroke-width="3"
                    />
                  </g>
                  <path
                    d="M36.7127 53.4746L36.6898 46.4259H33.6914V43.405H36.6898V41.3911C36.6898 38.6731 38.3603 37.3633 40.7669 37.3633C41.9196 37.3633 42.9104 37.4497 43.1991 37.4884V40.3288L41.53 40.3296C40.2212 40.3296 39.9678 40.9562 39.9678 41.8757V43.405H43.6859L42.6865 46.4259H39.9678V53.4746H36.7127Z"
                    fill="#B29C3F"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_253_2"
                      x="0.183594"
                      y="0.214355"
                      width="75.9688"
                      height="89.9692"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="7" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_253_2"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-7" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0.01 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_253_2"
                        result="effect2_dropShadow_253_2"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_253_2"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="footer__bottom__content__link__svg">
                <svg
                  width="77"
                  height="91"
                  viewBox="0 0 77 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_48_165)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.5237 73.1835C53.9791 73.1835 66.5082 60.6544 66.5082 45.1989C66.5082 29.7435 53.9791 17.2144 38.5237 17.2144C23.0682 17.2144 10.5391 29.7435 10.5391 45.1989C10.5391 60.6544 23.0682 73.1835 38.5237 73.1835Z"
                      fill="white"
                    />
                    <path
                      d="M65.0082 45.1989C65.0082 59.826 53.1507 71.6835 38.5237 71.6835C23.8966 71.6835 12.0391 59.826 12.0391 45.1989C12.0391 30.5719 23.8966 18.7144 38.5237 18.7144C53.1507 18.7144 65.0082 30.5719 65.0082 45.1989Z"
                      stroke="white"
                      stroke-width="3"
                    />
                  </g>
                  <path
                    d="M42.8536 42.8957C43.3358 42.8957 43.7267 42.5047 43.7267 42.0225C43.7267 41.5403 43.3358 41.1494 42.8536 41.1494C42.3714 41.1494 41.9805 41.5403 41.9805 42.0225C41.9805 42.5047 42.3714 42.8957 42.8536 42.8957Z"
                    fill="#B29C3F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.4453 45.7586C35.4453 47.765 37.077 49.3966 39.0833 49.3966C41.0897 49.3966 42.7213 47.765 42.7213 45.7586C42.7213 43.7522 41.0897 42.1206 39.0833 42.1206C37.077 42.1206 35.4453 43.7522 35.4453 45.7586ZM37.2646 45.7585C37.2646 44.7553 38.0805 43.9395 39.0836 43.9395C40.0868 43.9395 40.9026 44.7553 40.9026 45.7585C40.9026 46.7616 40.0868 47.5774 39.0836 47.5774C38.0805 47.5774 37.2646 46.7616 37.2646 45.7585Z"
                    fill="#B29C3F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.4466 53.0344H42.7226C44.5925 53.0344 46.3606 51.2663 46.3606 49.3964V42.1204C46.3606 40.2505 44.5925 38.4824 42.7226 38.4824H35.4466C33.5767 38.4824 31.8086 40.2505 31.8086 42.1204V49.3964C31.8086 51.2663 33.5767 53.0344 35.4466 53.0344ZM33.6279 42.1203C33.6279 41.2699 34.5965 40.3013 35.4469 40.3013H42.7229C43.5733 40.3013 44.5419 41.2699 44.5419 42.1203V49.3963C44.5419 50.2466 43.5733 51.2153 42.7229 51.2153H35.4469C34.5802 51.2153 33.6279 50.263 33.6279 49.3963V42.1203Z"
                    fill="#B29C3F"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_48_165"
                      x="0.539062"
                      y="0.214355"
                      width="75.9688"
                      height="89.9692"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="7" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_48_165"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-7" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0.01 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_48_165"
                        result="effect2_dropShadow_48_165"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_48_165"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="footer__bottom__content__link__svg">
                <svg
                  width="77"
                  height="91"
                  viewBox="0 0 77 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_48_161)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.883 73.1835C54.3385 73.1835 66.8676 60.6544 66.8676 45.1989C66.8676 29.7435 54.3385 17.2144 38.883 17.2144C23.4276 17.2144 10.8984 29.7435 10.8984 45.1989C10.8984 60.6544 23.4276 73.1835 38.883 73.1835Z"
                      fill="white"
                    />
                    <path
                      d="M65.3676 45.1989C65.3676 59.826 53.5101 71.6835 38.883 71.6835C24.256 71.6835 12.3984 59.826 12.3984 45.1989C12.3984 30.5719 24.256 18.7144 38.883 18.7144C53.5101 18.7144 65.3676 30.5719 65.3676 45.1989Z"
                      stroke="white"
                      stroke-width="3"
                    />
                  </g>
                  <path
                    d="M47.0381 39.9929C46.4384 40.2949 45.8387 40.3956 45.1391 40.4963C45.8387 40.0936 46.3385 39.4894 46.5383 38.6838C45.9387 39.0866 45.2391 39.288 44.4395 39.4894C43.8398 38.8852 42.9403 38.4824 42.0408 38.4824C40.3418 38.4824 38.8426 39.9929 38.8426 41.8054C38.8426 42.1075 38.8426 42.3089 38.9425 42.5102C36.244 42.4096 33.7454 41.1005 32.1463 39.0866C31.8464 39.5901 31.7465 40.0936 31.7465 40.7984C31.7465 41.9061 32.3462 42.913 33.2457 43.5172C32.7459 43.5172 32.2462 43.3158 31.7465 43.1144C31.7465 44.7256 32.8459 46.0346 34.3451 46.3367C34.0452 46.4374 33.7454 46.4374 33.4456 46.4374C33.2457 46.4374 33.0458 46.4374 32.8459 46.3367C33.2457 47.6457 34.445 48.6527 35.9442 48.6527C34.8448 49.5589 33.4456 50.0624 31.8464 50.0624C31.5466 50.0624 31.3467 50.0624 31.0469 50.0624C32.546 50.9687 34.2451 51.5729 36.0441 51.5729C42.0408 51.5729 45.339 46.5381 45.339 42.2082C45.339 42.1075 45.339 41.9061 45.339 41.8054C46.0386 41.3019 46.6383 40.6977 47.0381 39.9929Z"
                    fill="#B29C3F"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_48_161"
                      x="0.898438"
                      y="0.214355"
                      width="75.9688"
                      height="89.9692"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="7" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_48_161"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-7" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0.01 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_48_161"
                        result="effect2_dropShadow_48_161"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_48_161"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
