import React from 'react'
import { View, Text, Animated, Button } from 'react-native'

class Animation extends React.Component {
  state = {
    value: new Animated.Value(0) // Initialise our animated value at 0
  };

  animate = () => {
    // Define our animation...
    const animation = Animated.timing( // An animation with a duration and an end value
      this.state.value,                // The value to animate
      {
        toValue: 350,                  // The end value of 350 display pixels
        duration: 800                  // Takes 800ms
      }
    );
    animation.start(); // Start the animation!
  };

  render() {
    const { value } = this.state;
    const animationStyle = {
      transform: [{ translateY: value }] // Slightly odd syntax; transform takes an array of transformation objects
    };
    return (
      <View>
        <Button title="Go!" onPress={this.animate} />
        <Animated.View style={animationStyle}>
          <Text style={{ fontSize: 60 }}>👾</Text>
        </Animated.View>
      </View>
    );
  }
}

export default Animation;
