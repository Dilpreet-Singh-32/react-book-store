import React from 'react';

import { BlogItem } from './BlogItem';

interface BlogsSectionProps {}

export const BlogsSection: React.FunctionComponent<BlogsSectionProps> = () => {
  return (
    <section className="wn__recent__post bg--gray ptb--80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__title text-center">
              <h2 className="title__be--2">
                Our <span className="color--theme">Blog</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered lebmid alteration in some ledmid
                form
              </p>
            </div>
          </div>
        </div>
        <div className="row mt--50">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </section>
  );
};
