import React, { memo } from "react";
import "./styles.css";
import SphereNodeGraph from "../../components/SphereNodeGraph";
import LandingPage from "../LandingPage";

function Main() {
  return (
    <>
      {/* <div style={{ height: "99vh", width: "100%" }}>
        <SphereNodeGraph />
      </div> */}
      <LandingPage />

      {/* For video background */}
      {/* <div className="cont-main-main">
        <video className="videoTag" autoPlay loop muted>
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>
      <GlassmorphismCard />
      <AnimatedButton /> */}
    </>
  );
}

export default memo(Main);
