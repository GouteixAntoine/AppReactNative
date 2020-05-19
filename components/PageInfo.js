import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PageInfo = () => {
  return (
    <View style={styles.info}>
        <Text style={styles.textTitle}>A propos de moi</Text>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
        <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} styles={styles.img}/>
    </View>
  );
};

const styles = StyleSheet.create({
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        color: 'darkslateblue',
        fontSize: 30,
        marginBottom: 20,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 100,
        paddingRight: 100,
    },
    img: {
        width: 100,
        height: 100,
    },
});

export default PageInfo
