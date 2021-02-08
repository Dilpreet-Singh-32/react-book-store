import React, { useState, useEffect } from 'react';

import { Header, Footer, Slider } from '../shared/components';
import {
  NewsLetter,
  BestAuthors,
  BlogsSection,
  BestSaleSection,
} from './components';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!showContent) {
        setShowContent(true);
      }
    });

    return () => window.removeEventListener('scroll', () => {});
  });

  return (
    <div className="wrapper" id="wrapper">
      <Header />

      <div className="slider-area brown__nav slider--15 slide__activation slide__arrow01">
        <div className="slide animation__style10 bg-image--7 fullscreen align__center--left">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider__content">
                  <div className="contentbox">
                    <h2>
                      Buy <span>your </span>
                    </h2>
                    <h2>
                      favourite <span>Book </span>
                    </h2>
                    <h2>
                      from <span>Here </span>
                    </h2>
                    <a className="shopbtn" href="/">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="wn__product__area brown--color pt--80 pb--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__title text-center">
                <h2 className="title__be--2">
                  New <span className="color--theme">Products</span>
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered lebmid alteration in
                  some ledmid form
                </p>
              </div>
            </div>
          </div>
          <div className="furniture--4 border--round arrows_style mt--50">
            <Slider items={[]} dots={false} />
          </div>
        </div>
      </section>

      {showContent && (
        <>
          <NewsLetter />
          <BestAuthors />
          <BlogsSection />
          <BestSaleSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
