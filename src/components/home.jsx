import React from "react";
import "../styles/home.styles.scss";

const Home = () => {
  return (
    <div id="body">
      <Card
        className="section"
        img="./Capture1.PNG"
        title="About the Company"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
      />

      <Card
        className="section bg-grey"
        img="./Capture3.PNG"
        title="Our Values"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
      />

      <Card
        className="section"
        img="./Capture1.PNG"
        title="Our Mission"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
      />
    </div>
  );
};

export default Home;

const Card = (props) => {
  return (
    <div className={props.className}>
      {/* <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt="" />
      </div> */}

      <div className="big-div">
        <span className="div-title">{props.title}</span>
        <br />
        <span>{props.description}</span>
      </div>
    </div>
  );
};
