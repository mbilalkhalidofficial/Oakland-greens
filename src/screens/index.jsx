import React from "react";
import { AboutUsSection } from "../components/AboutUsSection";
import { FarmHouseFeaturesSection } from "../components/FarmHouseFeaturesSection";
import { FarmSection } from "../components/FarmSection";
import { FeatureSectioin } from "../components/FeatureSectioin";
import { HomeSection } from "../components/HomeSection";
import { LocationSection } from "../components/LocationSection";
import { LuxurySection } from "../components/LuxurySection";

export default function index() {
  return (
    <>
      <HomeSection />
      <FeatureSectioin />
      <AboutUsSection />
      <FarmSection />
      <FarmHouseFeaturesSection />
      <LuxurySection />
      <LocationSection />
    </>
  );
}
