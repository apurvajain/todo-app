import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { get, omit } from 'lodash';

// UI wrapper -----------------------------------------------------------------
const mapStateToProps = ({ firebase }) => ({
  firebaseConfig: firebase
});

// you can use this function in your page to make it feature toggleable
// see the example in Announcements.screen.js
export const getFeaturePage = (
  featureName,
  featureComponent,
  defaultComponent = Fragment
) => {
  const FeaturePage = class extends Component {
    render() {
      const { firebaseConfig } = this.props;
      const isOn = get(firebaseConfig, featureName, false);
      const FeatureImplementation = isOn ? featureComponent : defaultComponent;
      const extraProps = omit(this.props, 'firebaseConfig');
      return <FeatureImplementation {...extraProps} />;
    }
  };
  FeaturePage.displayName = featureName;
  FeaturePage.propTypes = {
    firebaseConfig: PropTypes.object
  };
  return connect(mapStateToProps, null)(FeaturePage);
};
