import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {colors} from "./constants";

const wrapStep = (Step, showLabel) => props => (
  <React.Fragment>
    <View style={styles.container}>
      <Step {...props} />
    </View>
    {showLabel ? (
      <View style={styles.label}>
        <Text style={styles.labelText}>{props.navigation.state.routeName}</Text>
      </View>
    ) : null}
  </React.Fragment>
);

const styles = StyleSheet.create({
  label: {
    height: 34,
    width: '100%',
    backgroundColor: colors.greyish,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  labelText: {
    color: colors.purple,
    fontFamily: 'opensans-extrabold'
  },
  container: {
    backgroundColor: 'white',
    padding: 35,
    paddingTop: 45,
    flex: 1
  }
});

export default wrapStep;
