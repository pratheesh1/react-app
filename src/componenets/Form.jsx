import React from "react";
import Form2 from "./form/Form-2";

export default function Form() {
  return (
    <React.Fragment>
      <Form2 type={"edit"} confirmation={true} />
    </React.Fragment>
  );
}
