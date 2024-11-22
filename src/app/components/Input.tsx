/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";
import { Controller, Control, FieldError } from "react-hook-form";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  maxLength?: number;
  control: Control<any>;
  name: string;
  rules?: any;
  error?: FieldError | any;
  label?: string;
}

const Input: React.FC<CustomInputProps> = ({
  maxLength,
  control,
  name,
  rules,
  error,
  label,
  ...props
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.type === "number") {
      if (["e", "E", "-", "+", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type && maxLength) {
      const value = e.target.value;
      if (value.length > maxLength) {
        e.target.value = value.slice(0, maxLength);
      }
    }
    props.onChange && props.onChange(e);
  };

  return (
    <div style={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            {label && (
              <label htmlFor={label} className="font-medium text-base">
                {label}
              </label>
            )}
            <input
              {...field}
              {...props}
              id={label}
              value={field.value || ""}
              className={props.className}
              maxLength={props.type === "number" ? undefined : maxLength}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                handleChange(e);
                field.onChange(e);
              }}
            />
          </>
        )}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default Input;
