import React from "react";

interface Props {
  name: string;
  label: string;
  type: "string" | "text";
  value: string | number | undefined;
  readonly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Use functional component when you dont have complex logic and states, but only props and HTML rendering

export const CustomInput: React.FC<Props> = (props) => (
  <>
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        readOnly={props.readonly}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  </>
);
