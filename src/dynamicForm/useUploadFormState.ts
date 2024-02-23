import { useState } from "react";

export const useSetForm = () => {
  const [formState, setFormState] = useState<{
    [key: string]: string | number | (string | number)[] | boolean;
  }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentKey = e.target.id;
    const currentValue = e.target.value;

    setFormState((prev) => ({
      ...prev,
      [currentKey]: currentValue,
    }));

    if (currentValue === "") {
      setErrors((prev) => ({
        ...prev,
        [e.target.id]: "You need to have a value here",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
    }
  };

  const changeStateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.id;
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormState((prev) => ({ ...prev, [id]: selectedOptions }));
    if (selectedOptions.length === 0)
      setErrors((prev) => ({
        ...prev,
        [id]: "You Need to Select At Least One",
      }));
  };

  return { changeState, formState, changeStateSelect, errors };
};
