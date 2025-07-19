import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
// import { TextInput } from 'react-native-gesture-handler'

const CreateScreen = ({ data, setdata }) => {
  const [itemName, setitemName] = useState('');
  const [stockAmnt, setstockAmnt] = useState('');

  const handlerAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmnt,
    };
    setdata([...data, newItem]);
    setitemName('');
    setstockAmnt('');
  };

  const deletehandler = (id) => {
     setdata(data.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Item Name..."
        placeholderTextColor="#90EE90"
        value={itemName}
        onChangeText={e => setitemName(e)}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Stock Amount..."
        placeholderTextColor="#90EE90"
        value={stockAmnt}
        onChangeText={e => setstockAmnt(e)}
        style={styles.input}
      />

      <Pressable style={styles.Addbutton} onPress={() => handlerAddItem()}>
        <Text style={styles.textColor}>Add Item</Text>
      </Pressable>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.headingText}>All Items in the Stock</Text>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.ItemContainer,
                { backgroundColor: item.stock < 10 ? '#FF7F7F' : '#90EE90' },
              ]}
            >
              <Text style={styles.ItemText}>{item.name}</Text>
              <Text style={styles.ItemText}>{item.stock}</Text>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Pressable
                  style={{
                    backgroundColor: '#993099ff',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                  }}
                  onPress={() => deletehandler(item.id)}>
                                    <Text style={styles.ItemText} >Edit</Text>
                  </Pressable>
                <Text style={styles.ItemText}>Delete</Text>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  Addbutton: {
    borderWidth: 1.5,
    backgroundColor: '#993099ff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10
  },
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#333',
    marginVertical: 10,
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 20,
  },
  ItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    borderRadius: 50,
  },
});
