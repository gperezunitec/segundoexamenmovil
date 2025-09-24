import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Producto} from "../Modelos/Producto";

export default function ListarProducto() {

    const [listaProducto, setListaProducto] = useState<Producto[]>([])

    async function listarProductos() {

        const response = await fetch('http://10.0.2.2:8000/productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const listado = await response.json();
        setListaProducto(listado)

    }

    useEffect(() => {
        listarProductos()
    }, []);

    useEffect(() => {
        console.log(listaProducto)
    }, [listaProducto])


    return (
        <View>
            <Text>Listado de Alumnos </Text>
            {
                listaProducto.length == 0 ? (
                        <Text>Cargando Informacion</Text>
                    )
                    : (

                        <FlatList data={listaProducto}
                                  keyExtractor={(item) => item.partNumber.toString()}
                                  renderItem={({ item }) =>
                                      <View>
                                          <Text>Nombre Producto: {item.name}</Text>
                                          <Text>Descripcion: {item.description}</Text>
                                          <Text>Precio : {item.value}</Text>
                                          <Text>Estado : {item.status}</Text>
                                      </View>

                                  }
                        >

                        </FlatList>
                    )
            }
        </View>
    )
}