import { FC } from "react";
import { MappedFormObj } from "./dynamicFormTypes";
import { useUploadForm } from "./useUploadFormState";

type Props = { formItem: MappedFormObj };

export const FormItem: FC<Props> = ({ formItem }) => {
  const { changeState, changeStateSelect, errors } = useUploadForm();
  return (
    <div className="dynamic-input">
      <label htmlFor={formItem.id}>{formItem.label}</label>
      {!(formItem.type === "select") ? (
        <input type={formItem.type} id={formItem.id} onChange={changeState} />
      ) : (
        <select
          id={formItem.id}
          onChange={changeStateSelect}
          multiple={formItem.multiple}
        >
          {formItem.options?.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {errors[formItem.id] !== "" && (
        <p className="errorMessage">{errors[formItem.id]}</p>
      )}
    </div>
  );
};
