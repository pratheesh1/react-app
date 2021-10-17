import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

//initiate axios instance
// TODO: to move api_base_url to env variable
const api_base_url = "http://localhost:3500";
const trails_api_endpoint = api_base_url + "/trails";

const instance = axios.create({
  baseURL: api_base_url,
  timeout: 1000,
});

//global store for form
const formStore = (set, get) => ({
  //state variables
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    aboutYou: "",
    trailName: "",
    country: "",
    countryName: "",
    difficultyLevel: "",
    distance: "",
    description: "",
    timeToComplete: "",
    describeTrail: "",
    imgTempLink: "",
    imageLink: [],
  },
  formType: "add",
  formPage: 1,
  formUpdateStatus: false,

  //callback functions
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
  // submit form to api
  submitForm: async () => {
    // create new object from form
    var newTrail = {
      trailName: get().formData.trailName,
      description: get().formData.description,
      country: {
        id: parseInt(get().formData.country),
        name: get().formData.countryName,
      },
      difficulty: parseInt(get().formData.difficultyLevel),
      timeToComplete: get().formData.timeToComplete,
      images: get().formData.imageLink,
      createdBy: {
        firstName: get().formData.firstName,
        lastName: get().formData.lastName,
        email: get().formData.email,
        aboutYou: get().formData.aboutYou,
      },
    };
    try {
      await instance.post(trails_api_endpoint, newTrail).then(() => {
        set((state) => ({
          ...state.formData,
          formUpdateStatus: true,
          formPage: state.formPage + 1,
        }));
      });
    } catch (e) {
      set((state) => ({
        ...state.formData,
        formPage: state.formPage + 1,
      }));
      console.log(e);
    }
  },
});

const useFormStore = create(devtools(formStore));

//global store for trails
const trailStore = (set, get) => ({
  //state variables
  trailsData: [],

  //callback functions
  setTrailsData: async () => {
    await instance
      .get(trails_api_endpoint)
      .then((res) => {
        set(() => ({ trailsData: res.data }));
      })
      .catch((e) => console.log(e));
  },
});

const useTrailStore = create(devtools(trailStore));

export { useFormStore, useTrailStore };

// (data) => set(() => ({ trailsData: "data" })),
