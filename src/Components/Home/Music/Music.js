import React, { useState } from "react";

export default function Music() {
  return (
    <>
      {
        <div
          style={{
            position: "absolute",
            height: "76px",
            left: "15em",
            width: "100%",
            bottom: "0em"
          }}
        >
          <iframe
            title="music"
            width="100%"
            height="76px"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217884463&color=%230a0a0a&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      }
    </>
  );
}
