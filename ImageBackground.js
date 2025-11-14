import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const ImgBackground = () => (
  <View style={styles.container}>
    <Text style={styles.label}>ImageBackground Example</Text>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: '#00000080',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
  },
});

export default ImgBackground;
