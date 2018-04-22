export default `import { PanResponder, Animated } from 'react-native';

...

constructor() {
  this.panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {
      dy: this.state.value
    }])
  });
}`;
