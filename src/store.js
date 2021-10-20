import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

//initiate axios instance
// TODO: to move api_base_url to env variable
const api_base_url = "http://localhost:3500";
const trails_api_endpoint = api_base_url + "/trails";
const trails_id_api_endpoint = api_base_url + "/trails/";

const instance = axios.create({
  baseURL: api_base_url,
  timeout: 1000,
});

/*-----------store for form-----------*/
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
  formType: "",
  formPage: 1,
  formUpdateStatus: false,

  //callback functions
  setFormType: (type) => set(() => ({ formType: type })),
  updateForm: (target, value) =>
    set((state) => ({ formData: { ...state.formData, [target]: value } })),
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
      distance: parseFloat(get().formData.distance),
      timeToComplete: get().formData.timeToComplete,
      describeTrail: get().formData.describeTrail,
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
          formUpdateStatus: true,
          formPage: state.formPage + 1,
        }));
      });
    } catch (e) {
      set((state) => ({
        formPage: state.formPage + 1,
      }));
      console.log(e);
    }
  },
  formReset: () =>
    set({
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
      formType: "",
      formPage: 1,
      formUpdateStatus: false,
    }),
});
const useFormStore = create(devtools(formStore));

/*-----------store for detailed view-----------*/
const detailedViewStore = (set, get) => ({
  //state variable
  detailedView: "616c0a04c6905716d039f20b",
  currentElelemt: {},

  //callback functions
  setDetailedView: (id) => set(() => ({ detailedView: id })),
  setCurrentElement: async () => {
    await instance
      .get(trails_id_api_endpoint + get().detailedView)
      .then((res) => {
        set(() => ({ currentElelemt: res.data }));
      })
      .catch((e) => console.log(e));
  },
  destroyCurrentElelemt: () => set(() => ({ currentElelemt: {} })),
});
const useDetailedViewStore = create(devtools(detailedViewStore));

/*-----------store for trails-----------*/
const trailStore = (set, get) => ({
  //state variables
  trailsData: [],
  numberOfTrails: 0,

  //callback functions
  setTrailsData: async () => {
    await instance
      .get(trails_api_endpoint)
      .then((res) => {
        set(() => ({ trailsData: res.data, numberOfTrails: res.data.length }));
      })
      .catch((e) => console.log(e));
  },
});
const useTrailStore = create(devtools(trailStore));

/*-----------store for everything else-----------*/
const globalStore = (set, get) => ({
  //state variables
  currentPage: "details",

  //callback functions
  setPage: (page) => set(() => ({ currentPage: page })),
});
const useGlobalStore = create(devtools(globalStore));

//export all store
export { useFormStore, useTrailStore, useGlobalStore, useDetailedViewStore };
