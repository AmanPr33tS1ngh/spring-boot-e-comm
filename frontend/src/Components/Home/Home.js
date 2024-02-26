import React from "react";
import Carousel from "../Carousel/Carousel";
import CarouselCard from "../Carousel/CarouselCard";
const Home = () => {
  return (
    <div>
      <Carousel
        items={[
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
        ]}
        responsive={{
          568: { items: 1 },
          1024: { items: 2 },
        }}
      />
      <br />
      <Carousel
        items={[
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
        ]}
        responsive={{
          0: { items: 1 },
          568: { items: 2 },
          1024: { items: 3 },
        }}
      />
      <br />
      <Carousel
        items={[
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
          <CarouselCard />,
        ]}
        responsive={{
          0: { items: 2 },
          568: { items: 3 },
          1024: { items: 4 },
        }}
      />
    </div>
  );
};
export default Home;
