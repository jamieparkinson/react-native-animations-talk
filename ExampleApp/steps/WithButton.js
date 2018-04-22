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
      transform: [{ translateY: value }]
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
