import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import {Producto} from "../Modelos/Producto";

export default function AgregarProducto() {
    const [partNumber, setPartNumber] = useState('')
    const [nombreProducto, setNombreProducto] = useState('')
    const [descripcionProducto, setDescripcionProducto] = useState('')
    const [precio, setPrecio] = useState('')
    const [estadoProducto, setEstadoProducto] = useState('')

    async function agregarProducto(){

        let producto:Producto={

            partNumber: partNumber,
            status: estadoProducto,
            value: parseFloat(precio),
            name: nombreProducto,
            description: descripcionProducto,
        }

        const respuesta= await fetch('http://10.0.2.2:8000/productos', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(producto)
        });

        const respuestaApi= await respuesta.json()

        if(respuestaApi){
            Alert.alert("Producto agregado")
        }
        else{
            Alert.alert('Ocurrio un error')
        }
    }

    return (
        <View>
            <Text>Agregar Producto</Text>

            <TextInput placeholder='Numero de Parte'
                       value={partNumber}
                       onChangeText={setPartNumber}
            ></TextInput>

            <TextInput placeholder='Nombre de Producto'
                       value={nombreProducto}
                       onChangeText={setNombreProducto}
            ></TextInput>

            <TextInput placeholder='Estado'
                       value={estadoProducto}
                       onChangeText={setEstadoProducto}
            ></TextInput>

            <TextInput placeholder='Descripcion'
                       value={descripcionProducto}
                       onChangeText={setDescripcionProducto}
            ></TextInput>

            <TextInput placeholder='Valor'
                       keyboardType='numeric'
                       value={precio}
                       onChangeText={setPrecio}
            ></TextInput>

            <Button title='Agregar Alumno' onPress={agregarProducto}></Button>
        </View>
    )
}