import { useState } from "react";

const useFormValidation = (input: { [key: string]: unknown }) => {
  const [values, setValues] = useState<{ [K in keyof typeof input]: unknown }>(
    {}
  );
};

export default useFormValidation;
