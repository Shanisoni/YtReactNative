import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 500 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Home</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
