import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ items = [], responsive }) => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="responsive"
      disableDotsControls
      disableButtonsControls
      stagePadding={{ margin: 15 }}
      autoPlay={true}
      autoPlayInterval={5000}
      infinite={true}
      keyboardNavigation={true}
    />
  );
};

export default Carousel;
