// Importing necessary React Native components
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
// import { FlatList } from 'react-native-gesture-handler' // Alternative import if using gesture handler

// Functional component AllItems
// Props se data receive ho raha hai, jisme items ka array hota hai
const AllItems = ({ data }) => {
  return (
    <View>
      {/* Heading Section jaha 'Items' aur 'Quantity' dikh raha hai */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      {/* FlatList ek efficient list component hai jo scrolling ke liye use hota hai */}
      <FlatList
        data={data} // Yeh prop me se aayi list hai jise render kiya ja raha hai
        keyExtractor={(item) => item.id} // Har item ka unique key id se banaya ja raha hai

        // renderItem ek function hai jo list ke har item ko kaise dikhana hai decide karta hai
        renderItem={({ item }) => (
          <View
            style={[
              styles.ItemContainer,
              {
                // Agar stock 10 se kam hai to red background, warna green
                backgroundColor: item.stock < 10 ? '#FF7F7F' : '#90EE90',
              },
            ]}
          >
            {/* Item name aur stock quantity display */}
            <Text style={styles.ItemText}>{item.name}</Text>
            <Text style={styles.ItemText}>{item.stock}</Text>
          </View>
        )}

        // List ke items ke beech spacing dena
        contentContainerStyle={{
          gap: 10, // iOS aur Android dono ke liye spacing ka kaam karega
        }}
      />
    </View>
  );
};

// Component ko export kar rahe hain taki dusre files me use ho sake
export default AllItems;

// StyleSheet banaya gaya hai jisme sabhi view, text aur list ke styles define kiye gaye hai
const styles = StyleSheet.create({
  // Heading section ke liye style
  headingContainer: {
    flexDirection: 'row', // Row me dono text side by side
    justifyContent: 'space-between', // Space between "Items" aur "Quantity"
    paddingHorizontal: 15, // Left aur right side padding
    marginBottom: 20, // Neeche space
  },

  // Heading text ke liye style
  headingText: {
    fontSize: 18, // Size bada
    fontWeight: '900', // Bold weight
    color: '#333', // Dark grey text
  },

  // Har item container ke liye style (row)
  ItemContainer: {
    flexDirection: 'row', // Name aur quantity side by side
    justifyContent: 'space-between', // Dono items ke beech me space
    paddingHorizontal: 15, // Left right padding
    paddingVertical: 10, // Top bottom padding
    borderBottomWidth: 1, // Neeche ek line dikhane ke liye
    borderBottomColor: '#ccc', // Light grey border line
    borderRadius: 20, // Rounded corners
  },

  // Item ke text ka style
  ItemText: {
    fontSize: 18, // Text bada
    fontWeight: '500', // Medium bold
    color: '#333', // Grey color
    borderRadius: 50, // Text ke aaspaas rounded look (abhi visible nahi because no bg)
  },
});
