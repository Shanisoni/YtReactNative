import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import AllItems from './AllItems'
// import LowStockView from './LowStockView'
import CreateScreen from './CreateScreen'


const data = [  { id: 1, name: 'Item 1', stock: 10, unit: 'kg' },
  { id: 2, name: 'Item 2', stock: 5, unit: 'kg' },
  { id: 3, name: 'Item 3', stock: 0, unit: 'kg' },
  { id: 4, name: 'Item 4', stock: 2, unit: 'kg' },
  { id: 5, name: 'Item 5', stock: 8, unit: 'kg' },
  { id: 6, name: 'Item 6', stock: 1, unit: 'kg' },
  { id: 7, name: 'Item 7', stock: 3, unit: 'kg' },
  { id: 8, name: 'Item 8', stock: 6, unit: 'kg' },
  { id: 9, name: 'Item 9', stock: 4, unit: 'kg' },
  { id: 10, name: 'Item 10', stock: 7, unit: 'kg' },]

const HomeScreen = () => {
  const [view, setview] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? {backgroundColor:'grey'} : null]} onPress={() => setview(0)}>
          <Text style={[styles.buttonText, view === 0 ? {color:'white'} : null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? {backgroundColor:'grey'} : null]} onPress={() => setview(1)}>
          <Text style={[styles.buttonText, view === 1 ? {color:'white'} : null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? {backgroundColor:'grey'} : null]} onPress={() => setview(2)}>
          <Text style={[styles.buttonText, view === 2 ? {color:'white'} : null]}>Create Item</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data}/>}
      {view === 1 && <AllItems/>}
      {/* {view === 1 && <LowStockView />} */}
      {view === 2 && <CreateScreen />}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 19,
  },
  button: {
    backgroundColor: '#fdfdfdff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#007BFF',
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
})
