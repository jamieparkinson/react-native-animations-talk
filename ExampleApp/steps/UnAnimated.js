import React from 'react'
import { View, Text } from 'react-native'

class Animation extends React.Component {
  render() {
    return (
      <View>
        {/* I'm adding a fontSize here just so it looks better... */}
        <Text style={{ fontSize: 60 }}>👾</Text>
      </View>
    );
  }
}

export default Animation;
