import { useState } from 'react';
import type {Medicamento} from '../types/Medicamento' 
function useMedicamento () {
    const [medicamentos, setMedicamento] = useState<Medicamento[]>([ //Defines the medication list as state typed as an array of Medicamento  
        {id: 1, nombre: "Paracetamol", precio:5, stock:10},
        {id:2, nombre: "Ibuprofeno", precio: 10, stock: 4}
    ])
    const buyButton = (idSeleccionado:number) => { //Function that  updates the state by reducing the sotck of the selected medication by 1
    setMedicamento(medicamentos.map((med)=> med.id === idSeleccionado ? {...med, stock: med.stock -1} : med))
    const agregarMedicamento = (nombre: string, precio: number, stock:number) => {
        const nuevoMedicamento= {
            id: Date.now(), nombre, precio, stock}
            setMedicamento([...medicamentos, nuevoMedicamento])
    }
        
    return {medicamentos, buyButton, agregarMedicamento}      //Returns the medicamentos state, the buyButton function, and the agregarMedicamento function as an object, allowing other components to access and use them.

    }
}

export default useMedicamento