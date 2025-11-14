import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ViewBoxes = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.blueBox} />
        <View style={styles.redBox} />
        <Text style={styles.text}>Hello World!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
    padding: 10,
  },
  blueBox: {
    flex: 0.2,
    backgroundColor: 'blue',
    height: '100%',
  },
  redBox: {
    flex: 0.4,
    backgroundColor: 'red',
    height: '100%',
  },
  text: {
    flex: 0.4,
    textAlign: 'center',
  },
});

export default ViewBoxes;
