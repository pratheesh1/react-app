import React from "react";

export default function FormType(props) {
  return (
    <div className="row m-0 p-0 form-heading">
      {props.type === "edit" ? <h2>Edit Trail</h2> : <h2>Add New Trail</h2>}
      {props.type === "edit" ? (
        <p className="form-subheading">Editing trail information.</p>
      ) : (
        <p className="form-subheading">
          This form allows you to add a new trail to the website.
        </p>
      )}
    </div>
  );
}
