import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const formStore = (set) => ({
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
    describeTrail: "",
    imgTempLink: "",
    imageLink: [],
  },
  formType: "add",
  formPage: 4,

  updateForm: (target, name) =>
    set((state) => ({ formData: { ...state.formData, [target]: name } })),
  formNextPage: () => set((state) => ({ formPage: state.formPage + 1 })),
  formPreviousPage: () => set((state) => ({ formPage: state.formPage - 1 })),
  addImgLink: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        imageLink: [...state.formData.imageLink, state.formData.imgTempLink],
        imgTempLink: "",
      },
    })),
  discardFile: () =>
    set((state) => ({ formData: { ...state.formData, imageLink: [] } })),
  submitForm: async () => {
    console.log("OK");
  },
});

const useFormStore = create(devtools(formStore));

export { useFormStore };
