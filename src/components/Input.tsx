import * as React from "react";

export interface InputProps {
  name: string;
  id: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  id,
  type = "text",
  value,
  placeholder,
  onChange,
  disabled,
  required,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className={className}
    />
  );
};

export default Input;
