import React from "react";
import classes from "./HomePage.module.css";
import Footer from "./Footer";
import Hero from "./Hero";
import {useEffect} from "react";
const HomePage = (props) => {
  const marg = {transform: "scale(0.7)"};
  useEffect(() => {
    localStorage.clear();
  }, []);

  //   const footerItems = [
  //     <NavLogo style={marg} text=" " logo={facebook} />,
  //     <NavLogo style={marg} text=" " logo={twitter} />,
  //     // <NavLogo style={marg} text=" " logo={skillplanet2} />,
  //
  //     <NavLogo style={marg} text=" " logo={github} />,
  //     <NavLogo style={marg} text=" " logo={linkedin} />,
  //   ];
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Hero is404={props.is404} />
        {/* <Footer items={footerItems} /> */}
      </div>
    </div>
  );
};

export default HomePage;
