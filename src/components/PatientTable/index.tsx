import type { patientData, priorityListType } from "../Dashboard";
import styles from "./PatientTable.module.css";
import { useWaitingTime } from "../../hooks/useWaitingTime";

interface PatientTableData {
    priorityList: priorityListType[]
    patientsList: patientData[]
}

function WaitingTimeCell({ patient, priorityList }: { patient: patientData; priorityList: priorityListType[] }) {
    const priority = priorityList.find(p => p.priority === patient.prioridade);
    const limitMinutes = priority?.limitTimer ?? null;

    const { waitingTimeFormatted, isExceeded } = useWaitingTime(patient.criado_em, limitMinutes);

    return (
        <span className={`${styles.espera} ${isExceeded ? styles.esperaOver : ''}`}>
            {waitingTimeFormatted}
        </span>
    );
}

export default function PatientTable({ priorityList, patientsList }: PatientTableData) {

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nº SENHA</th>
                        <th>PACIENTE</th>
                        <th>IDADE</th>
                        <th>PRIORIDADE</th>
                        <th>QUEIXA PRINCIPAL</th>
                        <th>ENTRADA</th>
                        <th>ESPERA</th>
                        <th>STATUS</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {patientsList.map((patient) => {
                        const isAtendimento = patient.status === "em_atendimento";
                        const priorityColor = priorityList.find(p => p.priority === patient.prioridade);


                        return (
                            <tr key={patient.id} className={styles.row}>

                                <td className={styles.senha}>{patient.id}</td>

                                <td className={styles.paciente}>
                                    <span className={styles.nome}>{patient.nome}</span>
                                    <br />
                                    <span className={styles.genero}>{patient.genero}</span>
                                </td>

                                <td className={styles.idade}>{patient.idade}</td>

                                <td className={styles.tdPrioridade}>
                                    <span className={styles.prioridade}>
                                        <span className={styles.dot} style={{ backgroundColor: priorityColor?.colorDot }} />
                                        <span>{patient.prioridade}</span>
                                    </span>
                                </td>

                                <td className={styles.queixa}>{patient.queixa_principal}</td>

                                <td className={styles.entrada}>
                                    {new Date(patient.criado_em).toLocaleTimeString("pt-BR", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </td>

                                <td>
                                    <WaitingTimeCell patient={patient} priorityList={priorityList} />
                                </td>

                                <td className={styles.status}>
                                    {isAtendimento ? (
                                        <span className={styles.statusAtendimento}>
                                            <span className={styles.statusIcon}>⚕</span> Em atendimento
                                        </span>
                                    ) : (
                                        <span className={styles.statusAguardando}>
                                            <span className={styles.statusIcon}>⏳</span> Aguardando
                                        </span>
                                    )}
                                </td>

                                <td>
                                    <div className={styles.acoes}>
                                        <button
                                            className={styles.btnVer}
                                        >
                                            Ver
                                        </button>
                                        {isAtendimento ? (
                                            <button
                                                className={styles.btnFinalizar}
                                            >
                                                Finalizar
                                            </button>
                                        ) : (
                                            <button
                                                className={styles.btnChamar}
                                            >
                                                Chamar
                                            </button>
                                        )}
                                        <button
                                            className={styles.btnRemover}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    )
}