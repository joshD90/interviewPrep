import { FormObj } from "./dynamicFormTypes";

export const testFormdata: FormObj = {
  firstname: { type: "text", label: "First Name" },
  secondname: { type: "text", label: "Second Name" },
  gender: {
    type: "select",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    multiple: false,
  },
  hobbies: {
    type: "select",
    label: "Hobbies",
    options: [
      { value: "sport", label: "Sport" },
      { value: "reading", label: "Reading" },
      { value: "travel", label: "Travel" },
    ],
    multiple: true,
  },
};
