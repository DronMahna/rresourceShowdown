import React, { memo } from "react";
import "./styles.css";

// components
import BackgroundAnimation from "../../components/BackgroundAnimation";
import GlassmorphismCard from "../../components/GlassmorphismCard";
import AnimatedButton from "../../components/AnimatedButton";
function LandingPage() {
  return (
    <>
      <BackgroundAnimation />
      <GlassmorphismCard />
      <AnimatedButton />
    </>
  );
}

export default memo(LandingPage);
