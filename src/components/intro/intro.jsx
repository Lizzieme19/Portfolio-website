import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from 'ityped';
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef();

useEffect(()=>{
  init(textRef.current, {
    showCursor: false,
    strings: ["Developer", "Designer"],
  });
 },[]);
  
    

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            className="img"
            src={process.env.PUBLIC_URL + "/assets/me.png"}
            alt="the  itselfu"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There, I'm</h2>
          <h1> Elizabeth Nyambura</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
}
