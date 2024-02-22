import { FC, useState } from "react";
import { FormObj, Option } from "./dynamicFormTypes";

import "./dynamicFormContainer.css";

type Props = { formObj: FormObj; cols?: number };

const DynamicFormContainer: FC<Props> = ({ formObj, cols }) => {
  const [formState, setFormState] = useState(() => {
    const formEntries = Object.entries(formObj);
    const mappedEntries = formEntries.map((entry) => {
      const id = entry[0];
      const restOfValues = entry[1];
      let options: null | Option[] = null;
      if ("options" in restOfValues) {
        options = restOfValues.options;
      }
      return {
        id,
        label: restOfValues.label,
        type: restOfValues.type,
        options,
      };
    });
    return mappedEntries;
  });

  return (
    <section className="form-container">
      <form action="" className="dynamic-form">
        {formState.map((input) => (
          <div key={input.id} className="dynamic-input">
            <label htmlFor={input.id}>{input.label}</label>
            {!(input.type === "select") ? (
              <input type={input.type} id={input.id} />
            ) : (
              <select id={input.id}>
                {input.options?.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </form>
    </section>
  );
};

export default DynamicFormContainer;
