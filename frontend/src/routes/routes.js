/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react';

import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

// eslint-disable-next-line
export default function RouteWrapper({
  component: Component,
  ...rest
}) {
  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

RouteWrapper.defaultProps = {};
