import React from "react";
import Card from "./Card";
import './Community.css';
function Community() {
  return (
    <>
      <div className="main">
        <h1 className="head">Make your photos more stylish</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="cards">
          <Card
            imgSrc="./images/CardImg1.jpg"
            heading="Sed ut perspiciatis"
            paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          />
          <Card
            imgSrc="./images/CardImg2.jpg"
            heading="Lorem ipsum dolor"
            paragraph="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            imgSrc="./images/CardImg3.jpg"
            heading="Nemo enim ipsam"
            paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          />
        </div>
      </div>
    </>
  );
}

export default Community;
