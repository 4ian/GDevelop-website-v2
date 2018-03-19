import React from 'react';
import Link from 'gatsby-link';

export default ({ to, ...otherProps }) =>
  /^https?:\/\//.test(to) ? (
    <a href={to} {...otherProps} />
  ) : (
    <Link to={to} {...otherProps} />
  );
