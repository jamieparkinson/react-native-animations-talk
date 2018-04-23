import React from 'react';
import { Font } from 'expo';
import { TabNavigator } from 'react-navigation';
import * as Steps from './steps';
import wrapStep from './wrapStep';

// You probably don't want to look at this code, have a look at ./steps/* instead

console.disableYellowBox = true;

const wrapAllSteps = (routes, { showLabel }) => Object.keys(routes)
  .reduce((wrapped, route) => {
    wrapped[route] = {
      ...routes[route],
      screen: wrapStep(routes[route].screen, showLabel)
    };
    return wrapped;
  }, {});

const RootNav = TabNavigator(wrapAllSteps({
  'Pre-animation': {
    screen: Steps.UnAnimated
  },
  'Basic animation': {
    screen: Steps.WithButton
  },
  'With interpolation': {
    screen: Steps.Interpolate
  },
  'With opacity interpolation': {
    screen: Steps.InterpolateOpacity
  },
  'Basic gesture': {
    screen: Steps.Gesture
  },
  'Gesture with opacity': {
    screen: Steps.GestureOpacity
  },
  'Gesture with a spring!': {
    screen: Steps.GestureSpring
  },
}, { showLabel: true }), {
  swipeEnabled: true,
  tabBarComponent: () => null,
  lazy: false
});

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'opensans-extrabold': require('./assets/OpenSans-ExtraBold.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <RootNav /> : null;
  }
}
