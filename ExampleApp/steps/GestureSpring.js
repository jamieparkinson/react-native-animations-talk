import React from 'react'
import { View, Text, Animated, PanResponder } from 'react-native'

class Animation extends React.Component {
  state = {
    value: new Animated.Value(0)
  };

  constructor(props) {
    super(props);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dy: this.state.value
      }]),
      onPanResponderRelease: () => { // When the touch is released
        // Basically just a simulated spring with an end value and duration.
        // For those who care, it's not a proper harmonic oscillator by default.
        const spring = Animated.spring(
          this.state.value,
          {
            toValue: 0,
            duration: 250,
            bounciness: 12, // This looks better than the default
          }
        );
        spring.start();
      }
    });
  }

  render() {
    const { value } = this.state;
    const animationStyle = {
      transform: [{ translateY: value }],
      opacity: value.interpolate({
        inputRange: [0, 350],
        outputRange: [1, 0.2]
      })
    };
    return (
      <View>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={animationStyle}
        >
          <Text style={{ fontSize: 60 }}>👾</Text>
        </Animated.View>
      </View>
    );
  }
}

export default Animation;
