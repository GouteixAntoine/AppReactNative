
import React, {useState} from 'react';
import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';
import {uuid} from 'uuidv4';
import {View, Text, Image, StyleSheet, FlatList, Button, Alert} from 'react-native';

const Home = ({navigation}) => {
    const [items, setItems] = useState([
        {id: uuid(), text: 'Poulet'},
        {id: uuid(), text: 'Oeuf'},
        {id: uuid(), text: 'Pomme de terre'},
        {id: uuid(), text: 'Lait'},
      ]);
    
      const deleteItem = (id) => {
        setItems(prevItems => {
          return prevItems.filter(item => item.id != id);
        });
      }
    
      const addItem = (text) => {
        if (!text) {
          Alert.alert('Erreur', 'Vous devez entrer un article', {text: 'D\'accord'});
        } else {
          setItems(prevItems => {
            return [{id: uuid(), text}, ...prevItems];
          });
        }
      }
  return (
      <View>
        <Header/>
        <AddItem addItem={addItem}/>
        <FlatList 
            data={items} 
            renderItem={({item}) => (<ListItem item={item} deleteItem={deleteItem} />
            )}/>
        <Button
            title="Info"
            onPress={() => navigation.navigate('Information')}
            color= 'darkslateblue'
            style={styles.button}
        />
      </View>
  );
};

const styles = StyleSheet.create({
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'darkslateblue',
        fontSize: 30,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
    button: {
    }
});

export default Home
