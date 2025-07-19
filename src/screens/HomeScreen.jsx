import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import AllItems from './AllItems'
// import LowStockView from './LowStockView'
import CreateScreen from './CreateScreen'




const HomeScreen = () => {
const [view, setview] = useState(0)
const [data, setdata] = useState([ 
    { id: 1, name: 'wheat', stock: 10, unit: 'kg' },
  { id: 2, name: 'maize', stock: 5, unit: 'kg' },
  { id: 3, name: 'rice', stock: 0, unit: 'kg' },
  { id: 4, name: 'corn', stock: 2, unit: 'kg' },
  { id: 5, name: 'barley', stock: 8, unit: 'kg' },
  { id: 6, name: 'oats', stock: 11, unit: 'kg' },
  { id: 7, name: 'rye', stock: 3, unit: 'kg' },
  { id: 8, name: 'sorghum', stock: 16, unit: 'kg' },
  { id: 9, name: 'millet', stock: 4, unit: 'kg' },
  { id: 10, name: 'quinoa', stock: 7, unit: 'kg' }])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? {backgroundColor:'green'} : null]} onPress={() => setview(0)}>
          <Text style={[styles.buttonText, view === 0 ? {color:'white'} : null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? {backgroundColor:'blue'} : null]} onPress={() => setview(1)}>
          <Text style={[styles.buttonText, view === 1 ? {color:'white'} : null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? {backgroundColor:'red'} : null]} onPress={() => setview(2)}>
          <Text style={[styles.buttonText, view === 2 ? {color:'white'} : null]}>Create Item</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data}/>}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 10)}/>}
      {/* {view === 1 && <LowStockView />} */}
      {view === 2 && <CreateScreen data={data} setdata={setdata} />}
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
