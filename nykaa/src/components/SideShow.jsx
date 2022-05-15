import React from "react";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  
  "https://images-static.nykaa.com/uploads/fbfdf32f-c76d-478f-aa62-c3c655393745.gif?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8b1a86fb-1bab-4382-a93c-22f4e063f30e.gif?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/7cf890d3-1a5d-4835-a122-5ea00dc6c2e6.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/fbfdf32f-c76d-478f-aa62-c3c655393745.gif?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/12a585ff-2004-40b6-b382-fad499ddb993.jpg?tr=w-1200,cm-pad_resize",
];

export default function Sideshow() {
  return (
    <div className="">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} style={{width:"80%",height:"600px"}}/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} style={{width:"80%",height:"600px"}} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]}  style={{width:"80%",height:"600px"}}/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[3]}  style={{width:"80%",height:"600px"}}/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[4]}  style={{width:"80%",height:"600px"}}/>
        </div>
      </Fade>
    </div>
  );
}
