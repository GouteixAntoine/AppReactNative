import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

const AddItem = ({ title, addItem }) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

  return (
      <View>
          <TextInput placeholder="Ajouter un article" style={styles.input} onChangeText={onChange}></TextInput>
          <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}>
                    <Icon name="add" size={20}/>Ajouter un article
                </Text>
          </TouchableOpacity>
      </View>
   
  );
};

const styles = StyleSheet.create({
  input: {
      height: 60,
      padding: 8,
      fontSize: 16,
  },
  btn: {
      backgroundColor: '#ff0000',
      padding: 9,
      margin: 5,
  },
  btnText: {
      color: 'darkskateblue',
      fontSize: 20,
      textAlign: 'center',
  },
});

export default AddItem;
