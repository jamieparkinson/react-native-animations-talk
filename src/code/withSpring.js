export default `this.panResponder = PanResponder.create({
  ...,
  onPanResponderRelease: () => {
    const spring = Animated.spring(
      this.state.value,
      {
        toValue: 0,
        duration: 250
      }
    );
    spring.start();
  }
);`;
