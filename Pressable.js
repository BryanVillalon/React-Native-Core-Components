import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Press = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = `${timesPressed}x onPress`;
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Pressable Example</Text>

      <Pressable
        onPress={() => setTimesPressed(current => current + 1)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.button,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text>{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
  logBox: {
    marginTop: 15,
    padding: 15,
    width: '80%',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default Press;
