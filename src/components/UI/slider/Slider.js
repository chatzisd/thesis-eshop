import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../UI/main-banner/Banner1";
import Banner2 from "../../UI/main-banner/Banner2";
import Banner3 from "../../UI/main-banner/Banner3";

const Slider = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Banner1/>
            </Carousel.Item>
            <Carousel.Item>
                <Banner2/>
            </Carousel.Item>
            <Carousel.Item>
                <Banner3/>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  };

  export default Slider;