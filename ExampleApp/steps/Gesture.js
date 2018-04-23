import React from 'react'
import { View, Text, Animated, PanResponder } from 'react-native'

class Animation extends React.Component {
  state = {
    value: new Animated.Value(0)
  };

  constructor(props) {
    super(props);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,    // Something like "when the touch starts this component should handle it"
      onPanResponderMove: Animated.event([null, {  // Bind our value to the vertical change in touch position
        dy: this.state.value
      }])
    });
  }

  render() {
    const { value } = this.state;
    const animationStyle = {
      transform: [{ translateY: value }]
    };
    return (
      <View>
        {/* `panHandlers` is an object full of props for a View */}
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
