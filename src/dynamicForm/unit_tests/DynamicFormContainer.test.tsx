import { render, screen } from "@testing-library/react";
import DynamicFormContainer from "../DynamicFormContainer";
import { FormObj } from "../dynamicFormTypes";

describe("Test suite for dynamic form container", () => {
  beforeEach(() => {
    render(<DynamicFormContainer formObj={testFormdata} />);
  });

  it("should render the correct number of inputs", () => {
    const selectInputs = screen.getAllByTestId("form-select-input");
    const basicInputs = screen.getAllByTestId("form-basic-input");

    expect(selectInputs).toHaveLength(2);
    expect(basicInputs).toHaveLength(2);
  });
});

const testFormdata: FormObj = {
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
