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
            <View>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>
        )}
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
    },
    headingText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    }
})