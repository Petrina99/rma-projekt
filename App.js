import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1)
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>{counter}</Text>
      <Button 
        title="I'm a button" 
        onPress={increment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 36
  }
});
