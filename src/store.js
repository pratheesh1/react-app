import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import {
  api_base_url as baseApiUrl,
  trails_api_endpoint as trailsApiUrl,
} from "./api";

//initiate axios instance
const instance = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
});

/*  -------- ** -------- | store for form |  -------- ** --------  */
const formStore = (set, get) => ({
  //state variables
  formData: {
    _id: "",
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
  trailBeingEdited: "",

  //callback functions
  setFormType: (type) => set(() => ({ formType: type })),
  updateForm: (target, value) =>
    set((state) => ({ formData: { ...state.formData, [target]: value } })),
  setTrailBeingEdited: (value) => set(() => ({ trailBeingEdited: value })),
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
      await instance.post(trailsApiUrl, newTrail);
      set((state) => ({
        formUpdateStatus: true,
        formPage: state.formPage + 1,
      }));
    } catch (e) {
      set((state) => ({
        formPage: state.formPage + 1,
      }));
      console.log(e);
    }
  },
  // submit updated form to api
  submitUpdate: async () => {
    // create updated object from form
    var updatedTrail = {
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
    };
    try {
      await instance.put(`${trailsApiUrl}${get().formData._id}`, updatedTrail);
      set((state) => ({
        formUpdateStatus: true,
        formPage: state.formPage + 1,
      }));
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

/*  -------- ** -------- | store for detailed view |  -------- ** --------  */
const detailedViewStore = (set, get) => ({
  //state variable
  detailedView: "",
  currentElelemt: {},
  currentView: "review",
  rating: 0,
  username: "",
  email: "",
  reviewText: "",
  newImage: "",
  updated: false,

  //callback functions
  setDetailedView: (id) => set(() => ({ detailedView: id })),
  updateForm: (target, value) => set(() => ({ [target]: value })),
  setCurrentElement: async () => {
    await instance
      .get(`${trailsApiUrl}${get().detailedView}`)
      .then((res) => {
        set(() => ({ currentElelemt: res.data }));
      })
      .catch((e) => console.log(e));
  },
  addReview: async () => {
    set(() => ({ updated: false }));
    const rating = {
      rating: get().rating,
      username: get().username,
      email: get().email,
      reviewText: get().reviewText,
      datetime: new Date().toISOString(),
    };
    const updatedRating = { review: [...get().currentElelemt.review, rating] };
    try {
      await instance.put(`${trailsApiUrl}${get().detailedView}`, updatedRating);
      set(() => ({
        updated: true,
        rating: "",
        username: "",
        reviewText: "",
        email: "",
      }));
    } catch (e) {
      console.log(e);
    }
  },
  setCurrentView: (element) => set(() => ({ currentView: element })),
  destroyCurrentElelemt: () => set(() => ({ currentElelemt: {} })),
  addImage: async () => {
    set(() => ({ updated: false }));
    const updatedImages = {
      images: [...get().currentElelemt.images, get().newImage],
    };
    try {
      await instance.put(`${trailsApiUrl}${get().detailedView}`, updatedImages);
      set(() => ({
        updated: true,
        newImage: "",
      }));
    } catch (e) {
      console.log(e);
    }
  },
  deleteTrail: async () => {
    try {
      await instance.delete(`${trailsApiUrl}${get().detailedView}`);
    } catch (e) {
      console.log(e);
    }
  },
});
const useDetailedViewStore = create(devtools(detailedViewStore));

/*  -------- ** -------- | store for trails |  -------- ** --------  */
const trailStore = (set, get) => ({
  //state variables
  trailsData: [],
  numberOfTrails: 0,

  //callback functions
  setTrailsData: async (params) => {
    await instance
      .get(trailsApiUrl, {
        params: params,
      })
      .then((res) => {
        set(() => ({ trailsData: res.data, numberOfTrails: res.data.length }));
      })
      .catch((e) => console.log(e));
  },
  setSortedData: (sortedData) => {
    set(() => ({ trailsData: sortedData }));
  },
});
const useTrailStore = create(devtools(trailStore));

/*  -------- ** -------- | store for search |  -------- ** --------  */
const searchStore = (set, get) => ({
  //state variables
  search: "",
  difficulty: [],
  distance: "",
  rating: [],
  show: "All Content",
  sort: "No Sort",

  //callback functions
  updateSearch: (target, value) => set(() => ({ [target]: value })),
});
const useSearchStore = create(devtools(searchStore));

/*  -------- ** -------- | store for everything else |  -------- ** --------  */
const globalStore = (set, get) => ({
  //state variables
  currentPage: "main",

  //callback functions
  setPage: (page) => set(() => ({ currentPage: page })),
});
const useGlobalStore = create(devtools(globalStore));

//export all store
export {
  useFormStore,
  useTrailStore,
  useGlobalStore,
  useDetailedViewStore,
  useSearchStore,
};
