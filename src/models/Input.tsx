import { ChangeEvent } from "react";

export interface inputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  inputName: string;
  className?: string;
  value?: string;
  placeholder?: string;
  checked?: boolean;
}

const Input = (props: inputProps) => {
  return (
    <>
      <input
        type={props.inputType}
        name={props.inputName}
        onChange={props.handleChange}
        className={props.className}
        value={props.value}
        placeholder={props.placeholder}
        checked={props.checked}
      />
    </>
  );
};

export default Input;
