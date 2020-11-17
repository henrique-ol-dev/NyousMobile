import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemEvento from '../../components/itemEvento';

const Home = () => {

    // const [token, setToken] = useState('');

    // const getToken = async () => {
    //     setToken(await AsyncStorage.getItem('@jwt'));
    // }

    // useEffect(()=>{
    //     getToken();
    // }, [])

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        listarEventos();
    },[])

    const listarEventos = () => {
        fetch(`http://192.168.6.120:5000/api/eventos`)
        .then(response => response.json())
        .then(dados => {
            setEventos(dados.data);
            console.log(dados.data);
        })
        .catch(err => console.error(err));
    }

    const renderItem = (evento) => {
        return (
            <ItemEvento 
                nome={evento.item.nome} 
                imagem={evento.item.urlImagem}
                link={evento.item.link} />
        )
    }   

    return(
        <View>
            <Text>HOME</Text>
            {/* <Text>{token}</Text> */}
            <FlatList 
                data={eventos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home;
