import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    aboutYou: "",
    trailName: "",
    country: "",
    difficultyLevel: "",
    distance: "",
    description: "",
    timeToComplete: "",
  },
  formType: "edit",
  formPage: 1,

  updateForm: (target, name) =>
    set((state) => ({ formData: { ...state.formData, [target]: name } })),
  formNextPage: () => set((state) => ({ formPage: state.formPage + 1 })),
  formPreviousPage: () => set((state) => ({ formPage: state.formPage - 1 })),
});

const useFormStore = create(devtools(store));

export { useFormStore };
