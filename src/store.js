import create from "zustand";
import { devtools } from "zustand/middleware";

const useFormStore = create(
  devtools((set) => ({
    formData: {},
    formType: "edit",
    formPage: "page2",

    setFormData: "",
    setFormType: "",
  }))
);

export { useFormStore };
