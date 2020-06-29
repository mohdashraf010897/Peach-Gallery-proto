import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./../styles/gallery.styles.scss";

// import img1 from "./../assets/1.jpg";
import img2 from "./../assets/2.jpg";
import img3 from "./../assets/3.jpg";
import img4 from "./../assets/4.jpg";
import img5 from "./../assets/5.jpg";
import img6 from "./../assets/6.jpg";

const images = [img2, img3, img4, img5, img6];
const Gallery = () => {
  return (
    <Carousel showThumbs={false}>
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img} style={{ maxHeight: "89vh", width: "100%" }} />
          <p className="legend">Lorem Ipsum</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
