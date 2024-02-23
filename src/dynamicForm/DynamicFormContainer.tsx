import { FC, useState } from "react";
import { FormObj, Option } from "./dynamicFormTypes";

import "./dynamicFormContainer.css";
import { mapFormObj } from "./utis";
import { FormItem } from "./FormItem";

type Props = { formObj: FormObj; cols?: number };

const DynamicFormContainer: FC<Props> = ({ formObj, cols }) => {
  const [formState, setFormState] = useState(() => mapFormObj(formObj));

  return (
    <section className="form-container">
      <form action="" className="dynamic-form">
        {formState.map((input) => {
          return <FormItem key={input.id} formItem={input} />;
        })}
      </form>
    </section>
  );
};

export default DynamicFormContainer;
