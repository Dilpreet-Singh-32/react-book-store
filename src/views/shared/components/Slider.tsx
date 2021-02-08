import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Slide } from './Slide';

const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  650: { items: 3 },
  1000: { items: 4 },
};

interface SliderProps {
  items: [];
  dots?: boolean;
  loop?: boolean;
  nav?: boolean;
}

export const Slider: React.FunctionComponent<SliderProps> = ({
  dots,
  nav,
  loop,
}) => {
  return (
    <OwlCarousel
      className="owl-theme"
      responsive={responsive}
      margin={30}
      dots={dots}
      nav={nav}
      loop={loop}
    >
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="HOT"
        originalPrice={39.75}
        salesPrice={35.99}
      />
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="BEST SALLER"
        originalPrice={39.75}
        salesPrice={35.99}
      />
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="BEST SALLER"
        originalPrice={39.75}
        salesPrice={35.99}
      />
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="BEST SALLER"
        originalPrice={39.75}
        salesPrice={35.99}
      />
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="BEST SALLER"
        originalPrice={39.75}
        salesPrice={35.99}
      />
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="BEST SALLER"
        originalPrice={39.75}
        salesPrice={35.99}
      />
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="BEST SALLER"
        originalPrice={39.75}
        salesPrice={35.99}
      />
      <Slide
        authorName="Guru Goind Singh"
        hotLabel="BEST SALLER"
        originalPrice={39.75}
        salesPrice={35.99}
      />
    </OwlCarousel>
  );
};
