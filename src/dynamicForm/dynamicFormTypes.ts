export interface InputBase {
  type: "text" | "number" | "password" | "email" | "select";
  label: string;
}

export interface SelectInput extends InputBase {
  type: "select";
  options: Option[];
  multiple?: boolean;
}

export type Option = {
  label: string;
  value: string;
};

export type FormObj = { [key: string]: InputBase | SelectInput };

export type MappedFormObj = {
  id: string;
  label: string;
  type: "number" | "text" | "password" | "email" | "select";
  options?: Option[];
  multiple?: boolean;
};
