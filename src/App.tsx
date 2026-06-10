import { useEffect, useState } from "react"
import Dashboard, { type patientData } from "./components/Dashboard"
import Header from "./components/Header"
import { pacienteService } from "./services/apiService"

function App() {
  const [patients, setPatients] = useState<patientData[]>([])

  const loadPatients = async () => {
    try {
      const response = await pacienteService.listar()
      setPatients(response.data)
    } catch (error) {
      console.error("Erro ao carregar pacientes:", error)
    }
  }

  useEffect(() => {
    loadPatients()
  }, [])

  return (
    <>
      <Header onPatientSaved={loadPatients} />
      <Dashboard patients={patients} />
    </>
  )
}

export default App
