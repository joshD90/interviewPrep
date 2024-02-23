import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormItem } from "../FormItem";
import { MappedFormObj } from "../dynamicFormTypes";

const selectItem: MappedFormObj = {
  type: "select",
  label: "Numbers",
  id: "numbers",
  options: [
    { label: "One", value: "one" },
    { value: "two", label: "Two" },
    { label: "Three", value: "three" },
  ],
};
const baseItem: MappedFormObj = {
  type: "text",
  label: "Numbers",
  id: "numbers",
};

describe("Test Inputs", () => {
  //we have to change this every time depending on the circumstances so no point really
  // const renderElement = (input:MappedFormObj) =>{
  //     render(<FormItem formItem={input}/>)
  // }

  it("Should have a label", () => {
    render(<FormItem formItem={baseItem} />);

    const labelElement = screen.findByLabelText(baseItem.id);
    expect(labelElement).toBeDefined();
  });

  it("should have an input when baseInput", () => {
    render(<FormItem formItem={baseItem} />);

    const inputElement = screen.findByTestId("form-basic-input");
    expect(inputElement).toBeDefined();
  });

  it("should have a select when selectInput", () => {
    render(<FormItem formItem={selectItem} />);

    const selectElement = screen.findByTestId("form-select-input");
    expect(selectElement).toBeDefined();
  });

  it("should have the correct text if it is a baseInput", () => {
    render(<FormItem formItem={baseItem} />);

    const baseInput = screen.getByTestId("form-basic-input");
    fireEvent.change(baseInput, { target: { value: "Hello World" } });
    expect(baseInput).toHaveValue("Hello World");
  });

  it("should have the correct values when select is changed", () => {
    render(<FormItem formItem={selectItem} />);

    const selectInput = screen.getByTestId("form-select-input");
    userEvent.selectOptions(selectInput, ["one"]);
    expect(selectInput).toHaveValue("one");
  });
});
