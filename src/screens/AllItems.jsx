import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-gesture-handler'

const AllItems = ({data}) => {
  return (
    <View>
        <View style={styles.headingContainer}>
            <Text style = {styles.headingText}>Items</Text>
            <Text style = {styles.headingText}>Quantity</Text>
        </View>

        <FlatList 
        data = {data}
        keyExtractor={(item) =>item.id}
        renderItem={({item}) => (
            <View style={[styles.ItemContainer , {backgroundColor: item.stock < 10 ? '#FF7F7F' : '#90EE90'}]}>
                <Text style={styles.ItemText}>{item.name}</Text>
                <Text style={styles.ItemText}>{item.stock}</Text>
            </View>
        )}

        contentContainerStyle={{
            gap: 10,
        }}
        />

    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
    headingContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:15,
        marginBottom: 20,
    },
    headingText:{
        fontSize: 18,
        fontWeight: '900',
        color: '#333',
    },
    ItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 20,
        
    },
    ItemText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
        borderRadius: 50,
        
    }
})