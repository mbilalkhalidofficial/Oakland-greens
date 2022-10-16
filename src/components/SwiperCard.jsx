import React from "react";

export default function SwiperCard({ svg, title, text }) {
  return (
    <div className="swiper_card">
      {svg}
      <div className="swiper_card_heading">{title}</div>
      <div className="swiper_card_para">{text}</div>
    </div>
  );
}
