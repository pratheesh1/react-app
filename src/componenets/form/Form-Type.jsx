import React from "react";
import { useFormStore } from "../../store";

export default function FormType(props) {
  //get state values and functions from different stores
  const trailBeingEdited = useFormStore.getState().trailBeingEdited;

  return (
    //set form title based on action type
    <div className="row m-0 p-0 form-heading">
      {props.type === "edit" ? <h2>Edit Trail</h2> : <h2>Add New Trail</h2>}
      {props.type === "edit" ? (
        <p className="form-subheading">Editing trail - {trailBeingEdited}</p>
      ) : (
        <p className="form-subheading">
          This form allows you to add a new trail to the website.
        </p>
      )}
    </div>
  );
}
