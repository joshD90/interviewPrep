import { FC, useState } from "react";

type InputTypes = "text" | "number" | "password" | "email";

type Props = {
  inputType: InputTypes;
  inputLabel: string;
};

export const ReusableInputComponent: FC<Props> = ({
  inputType,
  inputLabel,
}) => {
  const intialState = inputType === "number" ? 0 : "";
  const [inputValue, setInputValue] = useState<string | number>(intialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="myInput">{inputLabel}</label>
      <input type={inputType} onChange={handleInputChange} value={inputValue} />
      {/* to visualise output */}
      <p>{inputValue}</p>
    </div>
  );
};
