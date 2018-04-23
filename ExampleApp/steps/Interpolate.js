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
      transform: [
        { translateY: value },
        {
          // As before apart from this bit: we know our value will go between 0 and 350,
          // But we only want x to go between 0 and 200. Easy!
          translateX: value.interpolate({
            inputRange: [0, 350],
            outputRange: [0, 200]
          })
        }
      ]
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
