import React from 'react';

import { Slider } from '../../shared/components';

interface BestAuthorsProps {}

export const BestAuthors: React.FunctionComponent<BestAuthorsProps> = () => {
  return (
    <section className="wn__bestseller__area bg--white pt--80 pb--30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__title text-center">
              <h2 className="title__be--2">
                Top <span className="color--theme">Authors</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered lebmid alteration in some ledmid
                form
              </p>
            </div>
          </div>
        </div>
        <div className="product__indicator--4 arrows_style mt--50">
          <Slider items={[]} dots={false} nav={true} />
        </div>
      </div>
    </section>
  );
};
