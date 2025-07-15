import { StyleSheet, Text, View, Image, Pressable , useColorScheme} from 'react-native'
import React from 'react'

const App = () => {
 

  return (
    <View style={styles.container}>
      <View style={styles.container1}/>
      <View style={styles.container2}/>
        <View style={styles.container3}/>
    
      
      
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
    flex: 1,   
    backgroundColor: '#000000ff',
  },
  container1: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  }
  ,
  container2: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  }
  ,
  container3: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'grey',
  }


  // text: {
  //   fontSize: 20,
  //   color: 'black',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   marginTop: 50,
  //   marginHorizontal: 20,
  // },
  // image:{
  //   width: 300,
  //   height: 200,
  //   borderRadius: 10,
  //   marginTop: 20,
  //   alignSelf: 'center',
  // },
  // button: {


  //   backgroundColor: 'blue',
  //   padding: 1,
  //   borderRadius: 5,
  //   marginTop: 10,
  //   alignSelf: 'center',
  // },
  // buttonText: {
  //   color: 'white',
  //   fontSize: 16,
  //   textAlign: 'center',
  //   padding: 10,
  // },

})




















// import { StyleSheet, Text, View, Image, Pressable , useColorScheme} from 'react-native'
// import React from 'react'

// const App = () => {
//   const theme = useColorScheme();
//   // console.log('Current theme:', theme); // This will log 'light' or 'dark'
 
//   const isDarkMode = theme === 'dark';
//   const backgroundColor = isDarkMode ? '#000000ff' : '#974b4bff';
//   const textColor = isDarkMode ? '#000000ff' : '#ebd1d1ff';


//   return (
//     <View style={[styles.container, { backgroundColor: backgroundColor }]}>
//       <Text style={[styles.text, { color: textColor }]}>Hello , Shani this side </Text>
//       {/* <Image
//       style = {styles.image}
//       source={ { uri: 'https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg' }} 
//       />
//       <Pressable style = {styles.button}>

//         <Text style={styles.buttonText}>Press Me</Text>

//       </Pressable> */}
      
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 50,
//     marginHorizontal: 20,
//   },
//   // image:{
//   //   width: 300,
//   //   height: 200,
//   //   borderRadius: 10,
//   //   marginTop: 20,
//   //   alignSelf: 'center',
//   // },
//   // button: {


//   //   backgroundColor: 'blue',
//   //   padding: 1,
//   //   borderRadius: 5,
//   //   marginTop: 10,
//   //   alignSelf: 'center',
//   // },
//   // buttonText: {
//   //   color: 'white',
//   //   fontSize: 16,
//   //   textAlign: 'center',
//   //   padding: 10,
//   // },
//   container: {
//     // gap:10,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#000000ff',
//   },
// })