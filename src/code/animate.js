export default `...

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

...`;
