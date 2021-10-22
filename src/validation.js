import * as yup from "yup";

// schema for form page1 validation
let formPage1 = yup.object().shape({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  email: yup
    .string()
    .email("Email id is not valid!")
    .required("Email id is required!"),
});

// schema for form page2 validation
let formPage2 = yup.object().shape({
  trailName: yup.string().required("Trail name is required!"),
  country: yup.string().required("Country selection is required!"),
  difficultyLevel: yup.string().required("Difficulty selection is required!"),
  distance: yup
    .number()
    .typeError("Distance must be a number!")
    .required("Distance is required!"),
  description: yup.string().required("Description of the trail is required!"),
  timeToComplete: yup
    .number()
    .typeError("Time must be a number!")
    .required("Average time for completion is required!"),
});

// schema for form page3 validation
let formPage3 = yup.object().shape({
  describeTrail: yup
    .string()
    .required("Detailed description on the trail is a required field!")
    .min(600, "Trail description must be at least 600 characters!"),
});

export { formPage1, formPage2, formPage3 };
