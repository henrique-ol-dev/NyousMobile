import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Linking } from "react-native";


const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : '#F7F7F7',
        marginTop : 60
    },
    listItem : {
        margin : 10,
        padding : 10,
        backgroundColor : '#FFF',
        width : '80%',
        flex : 1,
        alignSelf : 'center',
        flexDirection : 'row',
        borderRadius : 5
    }
})

const ItemEvento = (evento) => {

    const {nome, imagem, link} = evento;

    return (
        <View style={styles.listItem}>
            <Image source={{uri : imagem}} 
                style={{width : 60, height:60, borderRadius : 30}} />
            <View style={{alignItems: 'center', flex : 1}}>
                <Text style={{fontWeight:'bold'}}>{nome}</Text>
            </View>
            <TouchableOpacity 
                onPress={() => Linking.openURL(link)}
                style={{
                    height : 50,
                    width : 50,
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                    <Text style={{color : 'red'}}>Ver</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemEvento;