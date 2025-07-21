// React Native ke components import kiye gaye hain jo UI banane ke kaam aate hain
import { Pressable, StyleSheet, Text, View } from 'react-native'

// useState React ka hook hai jisse component ke andar data (state) handle kiya jata hai
import { useState } from 'react'

// AllItems ek custom component hai jo sare items ko list karta hai
import AllItems from './AllItems'

// LowStockView component ko import kiya gaya tha par use abhi comment kiya hua hai (kaam me nahi liya abhi)
// import LowStockView from './LowStockView'

// CreateScreen ek component hai jisse new item create kar sakte ho
import CreateScreen from './CreateScreen'

// Yaha pe HomeScreen naam ka component banaya gaya hai
const HomeScreen = () => {

  // view ek state variable hai jo decide karta hai ki kaunsa screen dikhega
  // 0 = AllItems, 1 = LowStock, 2 = CreateScreen
  const [view, setview] = useState(0)

  // data ek array of items hai jisme har item ka id, name, stock aur unit diya gaya hai
  // ye default items list hai
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
    { id: 10, name: 'quinoa', stock: 7, unit: 'kg' }
  ])

  // Ye component return karta hai UI ko
  return (
    // View ek container hai jo sab kuch wrap karta hai (jaise div hota hai HTML me)
    <View style={styles.container}>

      {/* Title show karne ke liye Text use kiya gaya hai */}
      <Text style={styles.title}>Dashboard</Text>

      {/* Buttons ka group banaya gaya hai jisse view change hoga */}
      <View style={styles.buttonContainer}>

        {/* Pehla button - All Items dikhane ke liye */}
        <Pressable
          // Agar view 0 h to background green ho jata hai
          style={[styles.button, view === 0 ? {backgroundColor:'green'} : null]}
          // Button click karne par view set hota hai 0
          onPress={() => setview(0)}
        >
          {/* Button ka text - All Items */}
          <Text style={[styles.buttonText, view === 0 ? {color:'white'} : null]}>
            All Items
          </Text>
        </Pressable>

        {/* Dusra button - Low Stock items dikhane ke liye */}
        <Pressable
          // Agar view 1 h to background blue ho jata hai
          style={[styles.button, view === 1 ? {backgroundColor:'blue'} : null]}
          // Button click karne par view set hota hai 1
          onPress={() => setview(1)}
        >
          {/* Button ka text - Low Stock */}
          <Text style={[styles.buttonText, view === 1 ? {color:'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>

        {/* Teesra button - Create Item form dikhane ke liye */}
        <Pressable
          // Agar view 2 h to background red ho jata hai
          style={[styles.button, view === 2 ? {backgroundColor:'red'} : null]}
          // Button click karne par view set hota hai 2
          onPress={() => setview(2)}
        >
          {/* Button ka text - Create Item */}
          <Text style={[styles.buttonText, view === 2 ? {color:'white'} : null]}>
            Create Item
          </Text>
        </Pressable>
      </View>

      {/* Neeche selected view ke hisaab se component dikhate hain */}

      {/* Agar view 0 hai to AllItems component me sara data bhej do */}
      {view === 0 && <AllItems data={data}/>}

      {/* Agar view 1 hai to AllItems me sirf wahi items bhej do jinka stock 10 se kam hai */}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 10)}/>}

      {/* LowStockView abhi comment me hai, optional feature ke liye tha */}
      {/* {view === 1 && <LowStockView />} */}

      {/* Agar view 2 hai to CreateScreen component dikhao jisme data aur setdata pass ho raha hai */}
      {view === 2 && <CreateScreen data={data} setdata={setdata} />}
    </View>
  )
}

// Component ko export kar diya gaya hai taaki dusri file me use ho sake
export default HomeScreen

// Yaha niche sabhi styles banaye gaye hain jinka use upar kiya gaya hai
const styles = StyleSheet.create({
  // Main container ka style - screen ke size ke hisaab se
  container: {
    width: '100%', // Puri screen ki width
    height: '100%', // Puri screen ki height
    padding: '4%', // Char taraf 4% padding
    marginTop: 20, // Upar thoda space
    backgroundColor: '#fff', // Background white rakha gaya hai
  },

  // Title text ka style
 title: {
  fontSize: 34,
  fontWeight: '700',
  color: '#0F172A',
  lineHeight: 40,
  letterSpacing: 0.4,
  fontFamily: 'Inter',
  textAlign: 'left',
  marginVertical: 20,
  marginHorizontal: 118,
  

  // Border styling
  borderWidth: 2,
  borderColor: '#CBD5E1',
  borderRadius: 12,
  // paddingVertical: 10, // 🔽 Reduced padding (was 12 before )

  // 🔽 Reduced padding (was 12 before)
  // paddingVertical: 1,   // Less height inside border
  // paddingHorizontal: -18, // Less width inside border

  backgroundColor: '#F8FAFC',

  // Subtle shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},


  // Buttons ko row me dikhane ke liye container
  buttonContainer: {
    flexDirection: 'row', // Button ek line me aayenge
    gap: 10, // Button ke beech me gap (React Native 0.71+ me supported)
    marginVertical: 19, // Upar niche thoda margin
  },

  // Sabhi buttons ka basic design
  button: {
    backgroundColor: '#fdfdfdff', // Halka sa off-white background
    paddingVertical: 5, // Upar niche padding
    paddingHorizontal: 10, // Left right padding
    borderRadius: 50, // Circular corners
    borderWidth: 1.5, // Border ki width
    borderColor: '#007BFF', // Blue border
  },

  // Button ke andar likha hua text ka style
  buttonText: {
    color: 'black', // Text ka color black
    fontSize: 12, // Thoda chhota font
    fontWeight: 'bold', // Bold text
  },
})
