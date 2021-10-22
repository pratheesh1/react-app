import React from "react";
import Form1 from "./Form-1";
import Form2 from "./Form-2";
import Form3 from "./Form-3";
import Form4 from "./Form-4";
import Form5 from "./Form-5";
import { useFormStore } from "../../store";

export default function SwitchFormPage(props) {
  //get state values and functions from different stores
  var page = useFormStore((state) => state.formPage);
  var formType = useFormStore((state) => state.formType);

  //render page based on page number
  var switchFormPages = () => {
    switch (page) {
      case 1:
        return <Form1 type={formType} />;
      case 2:
        return <Form2 type={formType} countries={props.countries} />;
      case 3:
        return <Form3 type={formType} />;
      case 4:
        return <Form4 type={formType} />;
      case 5:
        return <Form5 type={formType} />;
      default:
        return <Form1 type={formType} />;
    }
  };

  return switchFormPages();
}
