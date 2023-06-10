import { FC } from "react";

import "./formStyles.css";
import { FormField } from "./formFields";
import { ActionType, FormContent } from "./formReducer";

type Props = {
  inputProps: FormField;
  dispatch: React.Dispatch<ActionType>;
  formContent: FormContent;
};

const FormInput: FC<Props> = ({ inputProps, dispatch, formContent }) => {
  return (
    <div className="field-container">
      <label htmlFor={inputProps.id}>{inputProps.label}</label>
      <input
        type={inputProps.type}
        placeholder={inputProps.placeholder}
        id={inputProps.id}
        onChange={(e) =>
          dispatch({
            type: inputProps.type,
            payload: { fieldName: inputProps.id, fieldValue: e.target.value },
          })
        }
        value={formContent.content.get(inputProps.id)?.content || ""}
      />
      <p>{formContent.content.get(inputProps.id)?.error}</p>
    </div>
  );
};

export default FormInput;
