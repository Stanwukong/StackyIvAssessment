import React from "react";

type FeatureCardProps = {
  id: number;
  label: string;
  text: string;
  textColor: string;
  bgColor: string;
};

const FeatureCard = ({
  id,
  label,
  text,
  textColor,
  bgColor,
}: FeatureCardProps) => {
  return (
    <div className={`flex flex-col w-full p-6 space-y-8`} style={{backgroundColor: bgColor}}>
      {/* Card Icon */}
      <p className={`text-lg lg:text-xl`} style={{ color: textColor}}>{label}</p>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;