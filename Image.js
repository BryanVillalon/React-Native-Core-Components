
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DisplayImg = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/favicon.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default DisplayImg;
