import type { ChangeEvent } from "react";
import { PatternFormat } from "react-number-format";
import styles from "./NewPacientInput.module.css";

interface NewPacientInputProps {
    label: string,
    name: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string
    mask?: string
}

export default function NewPacientInput({ label, name, value, onChange, placeholder, mask }: NewPacientInputProps) {
    return (
        <>
            <label>{label}</label>
            {mask === "cpf" ? (
                <PatternFormat
                    format="###.###.###-##"
                    mask="_"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) :
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            }
        </>
    )
}