export default `render() {
  const { value } = this.state;
  const animationStyle = {
    transform: [{ translateY: value }]
  };
  return (
    <Animated.View style={animationStyle}>
       <Text>👾</Text>
    </Animated.View>
  );
}`;
