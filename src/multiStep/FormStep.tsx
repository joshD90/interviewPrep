import { FC } from "react";

import "./formStyles.css";
import { FormField } from "./formFields";
import FormInput from "./FormInput";
import { ActionType, FormContent } from "./formReducer";

type Props = {
  fieldArray: FormField[];
  dispatch: React.Dispatch<ActionType>;
  formContent: FormContent;
};

const FormStep: FC<Props> = ({ fieldArray, dispatch, formContent }) => {
  return (
    <div className="step-container">
      {fieldArray.map((field, index) => (
        <FormInput
          inputProps={field}
          dispatch={dispatch}
          key={index}
          formContent={formContent}
        />
      ))}
    </div>
  );
};

export default FormStep;
