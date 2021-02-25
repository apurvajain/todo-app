import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from './routes/index.route';
import { enableScreens } from 'react-native-screens';
import { noop, result } from 'lodash';
import { OverlaySpinner } from './components';

import { appContainerStyle, statusBarStyle } from './themes/application.styles';
import { initializeFirebase } from './stores/actions/firebase.action';
enableScreens();

const App = ({ showSpinner, fetchFirebaseConfig }) => {
  useEffect(() => {
    fetchFirebaseConfig();
  }, [fetchFirebaseConfig]);

  return (
    <View style={appContainerStyle}>
      <StatusBar translucent {...statusBarStyle} />
      <Route />
      <OverlaySpinner showSpinner={showSpinner} />
    </View>
  );
};

App.defaultProps = {
  showSpinner: 0,
  fetchFirebaseConfig: noop
};

App.propTypes = {
  showSpinner: Proptypes.number.isRequired,
  fetchFirebaseConfig: Proptypes.func.isRequired
};

export const mapStateToProps = ({ spinner }) => ({
  showSpinner: result(spinner, 'count', 0)
});

export const mapDispatchToProps = dispatch => ({
  fetchFirebaseConfig: () => dispatch(initializeFirebase())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
