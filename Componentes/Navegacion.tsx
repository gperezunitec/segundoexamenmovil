import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';


import EliminarAlumno from "../Pages/EliminarAlumno";
import ListarProducto from "../Pages/ListarProducto";
import AgregarProducto from "../Pages/AgregarProducto";

export default function Navegacion() {

    const tab= createBottomTabNavigator();
  return (
    
    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name='Lista Producto' component={ListarProducto}></tab.Screen>
            <tab.Screen name='Agregar Producto' component={AgregarProducto}></tab.Screen>
            <tab.Screen name='Eliminar Producto' component={EliminarAlumno}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
   
  )
}