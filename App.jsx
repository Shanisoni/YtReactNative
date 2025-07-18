// import { StyleSheet, Text, ScrollView, View, Image, Pressable , useColorScheme} from 'react-native'
// import React from 'react'

// const App = () => {

//   return (
//     <ScrollView style={styles.container}>

//       <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>

//     </ScrollView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   container1: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     backgroundColor: 'yellow',
//   }
//   ,
//   container2: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//   }
//   ,
//   container3: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     backgroundColor: 'grey',
//   }

//   // text: {
//   //   fontSize: 20,
//   //   color: 'black',
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   //   marginTop: 50,
//   //   marginHorizontal: 20,
//   // },
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

// })

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

// import { StyleSheet, ScrollView, Text, View, Image, Pressable , useColorScheme} from 'react-native'
// import React from 'react'

// const App = () => {

//   return (
//     <ScrollView style={styles.container}

//     contentContainerStyle={{ gap: 10}}
//     horizontal
//     >

//        <View style={styles.container1}/>
//        <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//        <View style={styles.container2}/>
//          <View style={styles.container3}/>
//          <View style={styles.container1}/>
//        <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//         <View style={styles.container1}/>
//      <View style={styles.container2}/>
//         <View style={styles.container3}/>
//          <View style={styles.container1}/>
//        <View style={styles.container2}/>
//        <View style={styles.container3}/>
//         <View style={styles.container1}/>
//          <View style={styles.container1}/>
//       <View style={styles.container2}/>
//        <View style={styles.container3}/>
//          <View style={styles.container1}/>
//       <View style={styles.container2}/>
//         <View style={styles.container3}/>
//       <View style={styles.container1}/>
//        <View style={styles.container2}/>
//          <View style={styles.container3}/>
//          <View style={styles.container1}/>
//        <View style={styles.container2}/>
//       <View style={styles.container3}/>

//     </ScrollView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//        container: {
//       flex: 1,
//       padding:100,
//     // flexDirection: 'row',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   container1: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'yellow',
//   }
//   ,
//   container2: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//      borderRadius: 50,
//     backgroundColor: 'blue',
//   }
//   ,
//   container3: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//      borderRadius: 50,
//     backgroundColor: 'grey',
//   }

//   // text: {
//   //   fontSize: 20,
//   //   color: 'black',
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   //   marginTop: 50,
//   //   marginHorizontal: 20,
//   // },
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
//   // container: {
//   //   // gap:10,
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   backgroundColor: '#000000ff',
//   // },
// })





















// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList
// } from 'react-native';
// import React from 'react';
// // import { FlatList } from 'react-native/types_generated/index';


// const dummy = [
//   { id: 1, name: "Muskan", email: "muskan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 2, name: "Anny", email: "anny123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 3, name: "John", email: "john123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 4, name: "Harsh", email: "harsh123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 5, name: "Somu", email: "somu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 6, name: "Sarthak", email: "sarthak123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 7, name: "Rishu", email: "rishu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 8, name: "Arni", email: "arni123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 9, name: "Aryan", email: "aryan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 10, name: "Anil", email: "anil123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 1, name: "Muskan", email: "muskan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 2, name: "Anny", email: "anny123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 3, name: "John", email: "john123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 4, name: "Harsh", email: "harsh123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 5, name: "Somu", email: "somu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 6, name: "Sarthak", email: "sarthak123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 7, name: "Rishu", email: "rishu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 8, name: "Arni", email: "arni123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 9, name: "Aryan", email: "aryan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 10, name: "Anil", email: "anil123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 1, name: "Muskan", email: "muskan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 2, name: "Anny", email: "anny123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 3, name: "John", email: "john123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 4, name: "Harsh", email: "harsh123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 5, name: "Somu", email: "somu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 6, name: "Sarthak", email: "sarthak123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 7, name: "Rishu", email: "rishu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 8, name: "Arni", email: "arni123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 9, name: "Aryan", email: "aryan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 10, name: "Anil", email: "anil123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 1, name: "Muskan", email: "muskan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 2, name: "Anny", email: "anny123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 3, name: "John", email: "john123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 4, name: "Harsh", email: "harsh123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 5, name: "Somu", email: "somu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 6, name: "Sarthak", email: "sarthak123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 7, name: "Rishu", email: "rishu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 8, name: "Arni", email: "arni123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 9, name: "Aryan", email: "aryan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 10, name: "Anil", email: "anil123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 1, name: "Muskan", email: "muskan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 2, name: "Anny", email: "anny123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 3, name: "John", email: "john123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 4, name: "Harsh", email: "harsh123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 5, name: "Somu", email: "somu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 6, name: "Sarthak", email: "sarthak123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 7, name: "Rishu", email: "rishu123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 8, name: "Arni", email: "arni123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 9, name: "Aryan", email: "aryan123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   { id: 10, name: "Anil", email: "anil123@gmail.com", image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" },
//   // ... add more as needed, just copy-paste and increment the id/name/email
// ];


// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//       data ={dummy}
//       renderItem = {({item}) =>(
//          <View style={styles.card}>
//         <Image
//           style={styles.profileImage}
//           source={{
//             uri: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg',
//           }}
//         />
//         <Text>Name</Text>
//         <Text>Email</Text>
//       </View>

//       )}
//       keyExtractor={(item) => item.id}
//       numColumns={2}
//       columnWrapperStyle={{gap: 40}}
//       ItemSeparatorComponent={<View style={{height:50}} />}
//       />
     
//     </View>
//   );
// };

// export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingVertical: 10,
// //     paddingHorizontal: 10,
// //     backgroundColor: '#000000ff',
// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     backgroundColor: '#000000ff',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: 150,
//     height: 180,
//     backgroundColor: 'yellow',
//     borderRadius: 10,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 10,
//   },
// });







import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
import React, { useState } from 'react'
// import { Button } from 'react-native/types_generated/index'
// import { TextInput } from 'react-native/types_generated/index'

const App = () => {
   const [text, setText] = useState('')
   const [submittedText, setsubmittedText] = useState('');

   const handleSubmit = () => {
    setsubmittedText(text);
    setText(''); // Clear the input field after submission
   }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi there , Shani this side</Text>
      <TextInput placeholder='Type here...' 
      style={styles.textinpt}
      value={text}
      onChangeText={(e) => setText(e)}
      multiline
      numberOfLines={1}
      />
      <Button title='Submit' onPress={handleSubmit}></Button>
      {submittedText ? (<Text> Result  : {submittedText} </Text>) : null}

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textinpt: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
})