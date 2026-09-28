import useMedicamento from "./hooks/useMedicamento";
import MedCard from "./components/MedCard";
function App() {
  const {medicamentos, buyButton} = useMedicamento()
  return (
    <div>
      <h1>Farmacia</h1>
      {medicamentos.map((med)=> (
        <MedCard key={med.id} medicamento={med} onBuy={buyButton}/>
      ))}
    </div>
  )
}
export default App;


