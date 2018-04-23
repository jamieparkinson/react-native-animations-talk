import React from 'react'
import { View, Text, Animated, Button } from 'react-native'

class Animation extends React.Component {
  state = {
    value: new Animated.Value(0)
  };

  animate = () => {
    const animation = Animated.timing(
      this.state.value,
      {
        toValue: 350,
        duration: 800
      }
    );
    animation.start();
  };

  render() {
    const { value } = this.state;
    const animationStyle = {
      transform: [{ translateY: value }],
      // We can interpolate opacities too!
      // Notice that the output range goes 'backwards', that's fine as it's just a linear interpolation
      opacity: value.interpolate({
        inputRange: [0, 350],
        outputRange: [1, 0.2]
      })
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
