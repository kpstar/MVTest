import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Container } from 'native-base';
import { useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export default function App() {

  const [Clicks, setClicks] = useState(0);

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>MakrVerse Counter</Text>
      <Text style={styles.counter}>{Clicks}</Text>
      <Button style={styles.button} block primary rounded onPress={() => setClicks(Clicks + 1)}><Text>Increment</Text></Button>
      <Button style={styles.button} block light rounded disabled={Clicks==0} onPress={() => setClicks(Clicks - 1)}><Text>Decrement</Text></Button>
      <Button style={styles.button} block warning rounded onPress={() => setClicks(0)}><Text>Reset</Text></Button>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#316BEA',
    marginBottom: 20,
    fontSize: 25
  },
  counter: {
    color: '#F00',
    fontSize: 20,
    marginBottom: 20
  },
  button: {
    marginLeft: responsiveWidth(10),
    width: responsiveWidth(80),
    marginVertical: 10
  }
});
