import type { NextPage } from "next";
import { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import { InputGroupWrapper } from "./styled";

type InputGroupType = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
    values: any;
    errors: any;
    name: string;
    type: 'text' | 'password',
    label: string
}

const InputGroup: NextPage<InputGroupType> = ({handleChange, handleBlur, values, errors, name, type, label}) => (
    <InputGroupWrapper>
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {errors[name] && (
            <span>{errors[name]}</span>
        )}
    </InputGroupWrapper>
);

export default InputGroup;
