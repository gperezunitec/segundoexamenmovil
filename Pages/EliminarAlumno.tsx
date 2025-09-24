import React, {useState} from 'react';
import ListaAlumno from "./ListaAlumno";
import {Alert, Button, TextInput} from "react-native";

export default function EliminarAlumno(props) {


    const [idAlumno, setIdAlumno] = useState<number>()

    async function eliminarAlumno(id:number){
        try {
            const respuesta = await fetch(`http://192.168.0.7:5000/alumno/${idAlumno}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (respuesta.ok) {
                Alert.alert("Alumno eliminado correctamente");
                 // limpiar campo
            } else {
                Alert.alert("No se pudo eliminar el alumno");
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
                value={idAlumno}
                onChangeText={setIdAlumno}
                keyboardType="numeric"
            />
            <Button
                title="Eliminar"
                onPress={() => {
                    if (idAlumno) {
                        eliminarAlumno(idAlumno);
                    } else {
                        Alert.alert("Ingrese un ID válido");
                    }
                }}
            />
            <ListaAlumno></ListaAlumno>

        </>
    );
}

