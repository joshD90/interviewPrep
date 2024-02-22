export interface InputBase {
  type: "text" | "number" | "password" | "email" | "select";
  label: string;
}

export interface SelectInput extends InputBase {
  type: "select";
  options: Option[];
}

export type Option = {
  label: string;
  value: string;
};

export type FormObj = { [key: string]: InputBase | SelectInput };
