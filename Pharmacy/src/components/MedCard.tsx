import type {Medicamento} from '../types/Medicamento'
type MedCardProps = {
    medicamento: Medicamento //Define the type of the medicamento prop as Medicamento (nombre:string, precio:number, etc)
    onBuy : (idSeleccionado:number) => void //Receives as prop the function of the buy button, which will be executed when the user clicks on the button.
}
function MedCard ({medicamento, onBuy}: MedCardProps){ //The function receives the medicamento and onBuy props, which are destructured from the MedCardProps type.
    return (
        <div>
            <h2>{medicamento.nombre}</h2>
            <p>{medicamento.precio}</p>
            <p style={{ color: medicamento.stock < 5 ? 'red' : 'white'}}>{medicamento.stock}</p>
            <button onClick={()=> onBuy(medicamento.id)}>Comprar</button>
        </div>
)
}
export default MedCard
