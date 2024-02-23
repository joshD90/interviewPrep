import { FC } from "react";
import { MappedFormObj } from "./dynamicFormTypes";
import { useSetForm } from "./useUploadFormState";

type Props = { formItem: MappedFormObj };

export const FormItem: FC<Props> = ({ formItem }) => {
  const { changeState, changeStateSelect, errors } = useSetForm();
  return (
    <div className="dynamic-input" data-testid="FormItem">
      <label htmlFor={formItem.id}>{formItem.label}</label>
      {!(formItem.type === "select") ? (
        <input
          type={formItem.type}
          id={formItem.id}
          onChange={changeState}
          data-testid="form-basic-input"
        />
      ) : (
        <select
          id={formItem.id}
          onChange={changeStateSelect}
          multiple={formItem.multiple}
          data-testid="form-select-input"
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
