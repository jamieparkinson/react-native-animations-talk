export default `render() {
  const { value } = this.state;
  const animationStyle = {
    transform: [{ translateY: value }],
    opacity: value.interpolate({
      inputRange: [0, 350],
      outputRange: [1, 0.25]
    })
  };
  
  ...`;
