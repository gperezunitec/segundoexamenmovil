import React, {useState} from 'react';
import {Alert, Button, TextInput} from "react-native";
import ListarProducto from "./ListarProducto";

export default function EliminarProducto(props) {


    const [idProducto, setIdProducto] = useState<string>()

    async function eliminarProducto(id:string){
        try {
            const respuesta = await fetch(`http://10.0.2.2:8000/productos/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (respuesta.ok) {
                Alert.alert("Producto eliminado correctamente");
                // limpiar campo
            } else {
                Alert.alert("No se pudo eliminar el producto");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error en la conexión con el servidor");
        }
    }


    return (
        <>

            <TextInput
                placeholder="Ingrese el ID del alumno a eliminar"
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 8,
                    margin: 10,
                    borderRadius: 5,
                }}
                value={idProducto}
                onChangeText={setIdProducto}
                keyboardType="numeric"
            />
            <Button
                title="Eliminar"
                onPress={() => {
                    if (idProducto) {
                        eliminarProducto(idProducto);
                    } else {
                        Alert.alert("Ingrese un ID válido");
                    }
                }}
            />
            <ListarProducto></ListarProducto>

        </>
    );
}