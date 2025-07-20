import {
  StyleSheet,   // React Native ka built-in module styling ke liye
  Text,         // Text component jo screen par likhne ke liye use hota hai
  View,         // Container component jo layout banata hai
  TextInput,    // User se input lene ke liye input box
  Pressable,    // Button banane ke liye (TouchableOpacity ka modern version)
  FlatList,     // Scrollable list banane ke liye, list of data ko render karta hai
} from 'react-native';

import React, { useState } from 'react'; // React aur useState hook ko import kar rahe hai

// CreateScreen component banaya ja raha hai jisme data aur setdata props me milta hai
const CreateScreen = ({ data, setdata }) => {
  // itemName: ek state variable jisme item ka naam store hoga
  const [itemName, setitemName] = useState('');

  // stockAmnt: ek state variable jisme stock ki value store hogi
  const [stockAmnt, setstockAmnt] = useState('');

  // isEdit: check karta hai ki hum edit mode me hai ya nahi
  const [isEdit, setisEdit] = useState(false);

  // editItemID: jiska item edit ho raha hai uska ID store karta hai
  const [editItemID, seteditItemID] = useState(null);

  // Error message for item name input
  const [itemNameError, setitemNameError] = useState('');

  
 // Error message for stock amount input
 const [stockError, setstockError] = useState('')


  // Ye function ek naya item create karta hai jab Add button dabaya jata hai
  const handlerAddItem = () => {
    const newItem = {
      id: Date.now(),          // Unique id generate karte hai current timestamp se
      name: itemName,          // itemName ko newItem me set karte hai
      stock: stockAmnt,        // stockAmnt ko newItem me set karte hai
    };
    setdata([...data, newItem]);     // Pehle ke data me newItem add kar dete hai
    setitemName('');                 // Input field clear kar dete hai
    setstockAmnt('');               // Stock field clear kar dete hai
    setisEdit(false);              // Edit mode ko false kar dete hai
  };

  // Delete karne ke liye function - id se item hata dete hai
  const deletehandler = id => {
    setdata(data.filter(item => item.id !== id)); // Agar id match nahi ho rahi to hi rakhna
  };

  // Jab kisi item ko edit karna ho to uski purani values input me set kar dete hai
  const editItemHandler = item => {
    setisEdit(true);                   // Edit mode true kar dete hai
    setitemName(item.name);           // Input me item ka naam daal dete hai
    setstockAmnt(item.stock.toString()); // Stock value input me string format me
    seteditItemID(item.id);           // Edit hone wale item ki ID save kar lete hai
  };

  // Edit ke baad Update button dabane par yeh function chalta hai
  const updateItem = () => {
    setdata(
      data.map(item => {
        if (item.id === editItemID) {
          return { ...item, name: itemName, stock: parseInt(stockAmnt) }; // Agar ID match ho to values update karo
        }
        return item; // Baaki ke item as it is rakhna
      }),
    );
    // Input fields ko clear karna
    setitemName('');
    setstockAmnt('');
    setisEdit(false); // Edit mode khatam
    seteditItemID(null); // ID clear
  };

  return (
    <View style={styles.container}> {/* Main screen ka layout */}

      {/* Item name ke liye input field */}
      <TextInput
        placeholder="Enter Item Name..." // Placeholder text
        placeholderTextColor="#162716ff"  // Light green placeholder
        value={itemName}                 // itemName state se bind hai
        onChangeText={e =>{ 
          const isValid = /^[A-Za-z\s]*$/.test(e);  // ✅ Regular expression for only letters/spaces
          if(isValid){
            setitemName(e);// Agar valid hai to stock amount ko update karo
            setitemNameError(''); // Agar valid hai to error message clear karo
          }
          else{

            setitemNameError('❌ Numbers are not allowed in item name')

          }
          setitemName(e) // jab text change ho to state update karo      
        }}// styling apply

        style={[styles.input, itemNameError ? {borderColor : 'red' } : null ]} 
        
      />

      {itemNameError !== '' && (
        <Text style={{color : 'red'}}>{itemNameError}</Text>
      )}

      {/* Stock amount ke liye input field */}
      <TextInput
        placeholder="Enter Stock Amount..."
        placeholderTextColor="#0b1f0bff"
        value={stockAmnt}
        onChangeText={e => {
          
          const inValid = /^[0-9]*$/.test(e); // ✅ Regular expression for only numbers
          if(inValid){
            setstockError(''); // Agar valid hai to error message clear karo
            setstockAmnt(e); // Agar valid hai to stock amount ko update karo

          }
          else{
            setstockError('❌ Only numbers are allowed in stock amount') // Agar invalid hai to error message set karo
            setstockAmnt(''); // Agar invalid hai to stock amount ko clear karo
          }
        }
          
        }
        style={[styles.input, stockError ? {borderColor : 'red' } : null ]} // styling apply
      />
      {stockError !== '' && ( 
        <Text style={{color : 'red'}}>{stockError}</Text>
      )}   

      {/* Add ya Edit button - conditionally label aur function change hota hai */}
      <Pressable
        style={styles.Addbutton}
        onPress={() => (isEdit ? updateItem() : handlerAddItem())}
      >
        <Text style={styles.textColor}>
          {isEdit ? 'Editing Item in the Stock' : 'Add Item to the Stock'}
        </Text>
      </Pressable>

      {/* List of all added items show karna */}
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.headingText}> All Items in the Stock</Text>

        {/* FlatList - optimized list rendering */}
        <FlatList
          data={data}                           // Data pass karte hai
          keyExtractor={item => item.id}        // Unique key har item ke liye
          renderItem={({ item }) => (           // Har ek item kaise dikhna chahiye
            <View
              style={[                         // Conditional background color
                styles.ItemContainer,
                { backgroundColor: item.stock < 10 ? '#FF7F7F' : '#90EE90' },
              ]}
            >
              <Text style={styles.ItemText}>{item.name}</Text>
              <Text style={styles.ItemText}>{item.stock}</Text>

              {/* Delete and Edit buttons side-by-side */}
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Pressable
                  style={{
                    backgroundColor: '#8C1B2F',
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    paddingVertical: 5,
                  }}
                  onPress={() => deletehandler(item.id)}
                >
                  <Text style={[styles.ItemText, { color: '#FFFFFF' }]}>Delete</Text>
                </Pressable>

                <Pressable
                  onPress={() => editItemHandler(item)}
                  style={{
                    backgroundColor: '#9CD3D9',
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text style={styles.ItemText}>Edit</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }} // Items ke beech gap
        />
      </View>
    </View>
  );
};

export default CreateScreen; // Component ko export kar rahe hai taki dusri file me use ho sake

// Niche styles define kiye gaye hai jinka use upar kiya gaya hai
const styles = StyleSheet.create({
  textColor: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  Addbutton: {
    backgroundColor: '#6A0DAD',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 12,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
    marginVertical: 8,
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#E0FFE0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  ItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2F2F2F',
  },
});
