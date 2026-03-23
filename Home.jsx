import React from "react";
import background from "./images/Home_pic.png";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    </div>
  );
}