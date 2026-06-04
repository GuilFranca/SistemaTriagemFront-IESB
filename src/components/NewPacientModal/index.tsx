import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./NewPacientModal.module.css";
import { IoClose } from "react-icons/io5";
import { pacienteService } from "../../services/apiService";

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

                    <label>Nome completo</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite o nome..."
                    />

                    <label>CPF / RG</label>
                    <input
                        type="text"
                        name="cpf_rg"
                        value={formData.cpf_rg}
                        onChange={handleChange}
                        placeholder="Digite o documento..."
                    />

                    <label>Idade</label>
                    <input
                        type="text"
                        name="idade"
                        value={formData.idade}
                        onChange={handleChange}
                        placeholder="Digite a idade..."
                    />

                    <label>Sexo</label>
                    <input
                        type="text"
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        placeholder="Digite o sexo..."
                    />

                    <label>Queixa principal</label>
                    <input
                        type="text"
                        name="queixa_principal"
                        value={formData.queixa_principal}
                        onChange={handleChange}
                        placeholder="Digite a queixa..."
                    />

                    <label>Classificação de risco (protocolo Manchester)</label>
                    <input
                        type="text"
                        name="prioridade"
                        value={formData.prioridade}
                        onChange={handleChange}
                        placeholder="Digite a prioridade..."
                    />

                    <label>Observações</label>
                    <input
                        type="text"
                        name="observacoes"
                        value={formData.observacoes}
                        onChange={handleChange}
                        placeholder="Digite as observações..."
                    />

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