import { FormObj, MappedFormObj, Option } from "./dynamicFormTypes";

export const mapFormObj = (formObj: FormObj): MappedFormObj[] => {
  const formEntries = Object.entries(formObj);
  const mappedEntries = formEntries.map((entry) => {
    const id = entry[0];
    const restOfValues = entry[1];
    let options: undefined | Option[] = undefined;
    let multiple: undefined | boolean;
    if ("options" in restOfValues) {
      options = restOfValues.options;
    }
    if ("multiple" in restOfValues) multiple = restOfValues.multiple;

    return {
      id,
      label: restOfValues.label,
      type: restOfValues.type,
      options,
      multiple,
    };
  });
  return mappedEntries;
};
