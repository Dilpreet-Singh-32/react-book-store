import React from 'react';

interface BlogItemProps {}

export const BlogItem: React.FunctionComponent<BlogItemProps> = () => {
  return (
    <div className="col-md-6 col-lg-4 col-sm-12">
      <div className="post__itam">
        <div className="content">
          <h3>
            <a href="blog-details.html">
              International activities of the Frankfurt Book
            </a>
          </h3>
          <p>
            We are proud to announce the very first the edition of the frankfurt
            news.We are proud to announce the very first of edition of the fault
            frankfurt news for us.
          </p>
          <div className="post__time">
            <span className="day">Dec 06, 18</span>
            <div className="post-meta">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-heart"></i>72
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-comment"></i>27
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
