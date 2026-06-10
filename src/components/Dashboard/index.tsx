import styles from "./Dashboard.module.css"
import PatientCard from "../PatientCard";

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

export interface priorityListType {
    priority: string,
    text: string
    colorDot: string,
    colorFont: string,
    timer: string
}

const priorityList: priorityListType[] = [
    { priority: "todos", text: "Em Espera", colorDot: "#1b1212", colorFont: "#312d2d", timer: "pacientes na fila" },
    { priority: "emergencia", text: "Emergência", colorDot: "#A32D2D", colorFont: "#E24B4A", timer: "atendimento imediato" },
    { priority: "urgente", text: "Urgente", colorDot: "#F39C12", colorFont: "#F39C12", timer: "até 10 minutos" },
    { priority: "pouco_urgente", text: "Pouco Urgente", colorDot: "#4A90E2", colorFont: "#4A90E2", timer: "até 30 minutos" },
    { priority: "nao_urgente", text: "Não Urgente", colorDot: "#7CB342", colorFont: "#7CB342", timer: "até 120 minutos" },
]

interface DashboardProps {
    patients: patientData[];
}

export default function Dashboard({ patients }: DashboardProps) {
    return (
        <main>
            <div className={styles.patientContainer}>
                <div className={styles.filterBoard}>

                </div>
                <div className={styles.dashBoard}>
                    <div className={styles.priorityCardsContainer}>
                        {priorityList.map((priorityList) => (
                            <PatientCard
                                patinentData={patients}
                                priority={priorityList}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}