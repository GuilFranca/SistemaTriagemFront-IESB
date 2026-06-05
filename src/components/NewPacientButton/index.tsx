import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import styles from "./NewPacientButton.module.css";
import NewPacientModal from "../NewPacientModal";

export default function NewPacientButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className={styles.newPacientButton} 
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus /> Novo Paciente
      </button>

      {isModalOpen && (
        <NewPacientModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}