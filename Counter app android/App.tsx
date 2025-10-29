import { SafeAreaView, Text, Image, Button, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
// import { Button } from 'react-native/types_generated/index';

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <Text style={{ padding: 50, color: '#green', fontSize: 40, fontWeight: 'bold', alignSelf: 'center' }}>Counter</Text>
      <Image
        style={{ height: 200, width: 500, paddingTop: 200 }}
        source={{
          uri: 'https://freesvg.org/img/1365967194.png',
        }}
      />
      <Pressable
        style={styles.pressable}
        onPress = {()=> setCount(count+1)}  
      >
        <Text style={{color: 'white', alignSelf: 'center', fontSize: 25, fontFamily: 'sans-serif'}}>Click me</Text>
      </Pressable>

      <Text style={{alignSelf: 'center', fontSize: 300, fontFamily: 'sans-serif', marginTop: 50}}> {count} </Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  pressable: {
    height: 40,
    width:200,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  }
})