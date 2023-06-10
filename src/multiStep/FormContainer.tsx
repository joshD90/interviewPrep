import { FC, useReducer, useState } from "react";

import "./formStyles.css";
import FormStep from "./FormStep";
import { userDetails, userHealth } from "./formFields";
import { FormContent, formReducer } from "./formReducer";

const allSteps = [userDetails, userHealth];
const initialFormFields: FormContent = {
  error: "",
  content: new Map<string, { error: string; content: string }>(),
};

const FormContainer: FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formFields, dispatch] = useReducer(formReducer, initialFormFields);

  console.log(formFields);

  const changeStep = (direction: "forward" | "back") => {
    if (direction === "forward") {
      setCurrentStepIndex((prev) => prev + 1);
    }
    if (direction === "back") {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="form-container">
      <div className="form-container-inset">
        <button onClick={() => changeStep("back")}>Go Back</button>
        <FormStep
          fieldArray={allSteps[currentStepIndex]}
          dispatch={dispatch}
          formContent={formFields}
        />
        <button onClick={() => changeStep("forward")}>Go Forwards</button>
      </div>
    </div>
  );
};

export default FormContainer;
