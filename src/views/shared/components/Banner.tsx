import React from 'react';

interface BannerProps {
  title: string;
}

export const Banner: React.FunctionComponent<BannerProps> = ({ title }) => {
  return (
    <div className="ht__bradcaump__area bg-image--6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bradcaump__inner text-center">
              <h2 className="bradcaump-title">{title}</h2>
              {/* <nav className="bradcaump-content">
                <a className="breadcrumb_item" href="index.html">
                  Home
                </a>
                <span className="brd-separetor">/</span>
                <span className="breadcrumb_item active">Shop Grid</span>
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
