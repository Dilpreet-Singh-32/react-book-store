import React from 'react';

import './styles/slick.min.css';
import { BestSaleItem } from './BestSaleItem';

interface BestSaleSectionProps {}

export const BestSaleSection: React.FunctionComponent<BestSaleSectionProps> = () => {
  return (
    <section className="best-seel-area pt--80 pb--60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__title text-center pb--50">
              <h2 className="title__be--2">
                Best <span className="color--theme">Seller </span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered lebmid alteration in some ledmid
                form
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider center slick-initialized slick-slider">
        <button
          className="slick-prev slick-arrow"
          aria-label="Previous"
          type="button"
        >
          Previous
        </button>
        <div className="slick-list draggable" style={{ padding: '0px' }}>
          <div className="slick-track" style={{ opacity: 1, width: '4632px' }}>
            <BestSaleItem />
            <BestSaleItem />
            <BestSaleItem />
            <BestSaleItem active />
            <BestSaleItem />
            <BestSaleItem />
            <BestSaleItem />
            <BestSaleItem />
          </div>
        </div>
      </div>
    </section>
  );
};
