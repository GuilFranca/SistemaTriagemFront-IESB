import { useEffect, useState } from "react"
import styles from "./Dashboard.module.css"
import { pacienteService } from "../../services/apiService";

export interface patientData {
    id: number,
    nome: string,
    genero: string,
    idade: number,
    cpf_rg: string,
    prioridade: string,
    queixa_principal: string,
    observacoes: string,
    status: string,
    criado_em: string,
    tempo_espera: string
}


export default function Dashboard() {
    const [patients, setPatients] = useState<patientData[]>();

    useEffect(() => {
        async function loadPatients() {
            try {
                const response = await pacienteService.listar();

                setPatients(response.data);

                console.log(response.data);
                console.log(patients);
            } catch (error) {
                console.error(error);
            }
        }

        loadPatients();
    }, []);


    // useEffect(() => {
    //     async function loadPatients() {
    //         const response = await fetch("/api/patients");
    //         const data = await response.json();

    //         setPatients(data);
    //     }

    //     loadPatients();
    // }, []);

    return (
        <div>Dashboard</div>
    )
}