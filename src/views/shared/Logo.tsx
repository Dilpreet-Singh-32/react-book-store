import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FunctionComponent = () => {
  return (
    <Link to="/">
      <img src="images/logo/favicon.ico" alt="Logo" />
    </Link>
  );
};
