import { FEATURES } from "@/constants";
import React from "react";
import FeatureCard from "./ui/FeatureCard";

const FeaturesComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:w-full py-10">
      {FEATURES.map((feature) => (
        <FeatureCard
          key={feature.id}
          id={feature.id}
          label={feature.label}
          text={feature.text}
          textColor={feature.textColor}
          bgColor={feature.bgColor}
        />
      ))}
    </div>
  );
};

export default FeaturesComponent;
