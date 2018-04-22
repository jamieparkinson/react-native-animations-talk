export default `render() {
  const { value } = this.state;
  const animationStyle = {
    transform: [{ translateY: value }]
  };
  return (
    <View>
      <Button title="Go!" onPress={this.animate} />
      <Animated.View style={animationStyle}>
        <Text>👾</Text>
      </Animated.View>
    </View>
  );
}`;
