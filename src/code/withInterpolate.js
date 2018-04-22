export default `render() {
  const { value } = this.state;
  const animationStyle = {
    transform: [
      { translateY: value },
      {
        translateX: value.interpolate({
          inputRange: [0, 350],
          outputRange: [0, 200]
        })
      }
    ]
  };
  
  ...`;
