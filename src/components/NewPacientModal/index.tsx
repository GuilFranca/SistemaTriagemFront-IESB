import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./NewPacientModal.module.css";
import { IoClose } from "react-icons/io5";
import { pacienteService } from "../../services/apiService";
import NewPacientInput from "../NewPacientInput";

interface NewPacientModalProps {
    onClose: () => void;
    onSaved?: () => void;
}

interface formPacient {
    nome: string;
    genero: string;
    idade: string; // Dica: mudei para string para facilitar o tratamento no input text comum
    cpf_rg: string;
    prioridade: string;
    queixa_principal: string;
    observacoes?: string;
}

export default function NewPacientModal({ onClose, onSaved }: NewPacientModalProps) {

    const [formData, setFormData] = useState<formPacient>({
        nome: "",
        genero: "",
        idade: "",
        cpf_rg: "",
        prioridade: "",
        queixa_principal: "",
        observacoes: ""
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await pacienteService.criar({
                ...formData,
                idade: Number(formData.idade)
            });

            onSaved?.();
            onClose();
            console.log("Enviado com sucesso");
        } catch (error) {
            console.error("Erro ao cadastrar paciente:", error);
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

                <div className={styles.modalTopContent}>
                    <h1 className={styles.modalTitle}>Cadastrar Novo Paciente</h1>
                    <button type="button" className={styles.closeButton} onClick={onClose}>
                        <IoClose size={"25px"} style={{ color: "var(--gray-dark)" }} />
                    </button>
                </div>

                {/* 1. CORREÇÃO AQUI: Conectando a função ao evento de envio do formulário */}
                <form className={styles.modalForm} onSubmit={handleSubmit}>

                    <div className={styles.modalInputs}>
                        <NewPacientInput
                            label="Nome completo"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Digite o nome..."
                        />

                        <NewPacientInput
                            label="CPF / RG"
                            name="cpf_rg"
                            value={formData.cpf_rg}
                            onChange={handleChange}
                            placeholder="000.000.000-00"
                            mask="cpf"
                        />

                        <NewPacientInput
                            label="Idade"
                            name="idade"
                            value={formData.idade}
                            onChange={handleChange}
                            placeholder="Digite a idade..."
                        />

                        <NewPacientInput
                            label="Sexo"
                            name="genero"
                            value={formData.genero}
                            onChange={handleChange}
                            placeholder="Digite o sexo..."
                        />

                        <NewPacientInput
                            label="Queixa principal"
                            name="queixa_principal"
                            value={formData.queixa_principal}
                            onChange={handleChange}
                            placeholder="Digite a queixa..."
                        />

                        <NewPacientInput
                            label="Classificação de risco (protocolo Manchester)"
                            name="prioridade"
                            value={formData.prioridade}
                            onChange={handleChange}
                            placeholder="Digite a prioridade..."
                        />

                        <NewPacientInput
                            label="Observações"
                            name="observacoes"
                            value={formData.observacoes!}
                            onChange={handleChange}
                            placeholder="Digite as observações..."
                        />
                    </div>

                    <div className={styles.formActions}>
                        <button type="button" onClick={onClose} className={styles.cancelButton}>
                            Cancelar
                        </button>
                        <button type="submit" className={styles.saveButton}>
                            Salvar
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}