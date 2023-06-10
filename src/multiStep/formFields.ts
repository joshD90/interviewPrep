export type FormField = {
  type: "text" | "email" | "password";
  placeholder: string;
  id: string;
  label: string;
};

export const userDetails: FormField[] = [
  {
    type: "text",
    placeholder: "First Name Here",
    id: "fName",
    label: "First Name",
  },
  {
    type: "text",
    placeholder: "Last Name Here",
    id: "lName",
    label: "Last Name",
  },
  {
    type: "email",
    placeholder: "Email Here",
    id: "email",
    label: "Email Address",
  },
  {
    type: "email",
    placeholder: "Email Here Confirmation",
    id: "emailConfirm",
    label: "Email Confirmation",
  },
  {
    type: "password",
    placeholder: "Password Here",
    id: "password",
    label: "Password",
  },
];

export const userHealth: FormField[] = [
  {
    type: "text",
    placeholder: "GP Name Here",
    id: "gpName",
    label: "GP Name",
  },
  {
    type: "text",
    placeholder: "Current Medications",
    id: "text",
    label: "Current Medication",
  },
  {
    type: "text",
    placeholder: "Any Chronic Health Conditions",
    id: "chronicHealth",
    label: "Any Chronic Health Conditions",
  },
  {
    type: "text",
    placeholder: "Recent Surgeries",
    id: "recentSurgeries",
    label: "Any recent Surgeries",
  },
];
