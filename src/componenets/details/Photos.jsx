import React from "react";
import "../../assets/styles/details.css";
import { useDetailedViewStore } from "../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPhotoForm } from "../../validation";

export default function Photos() {
  //get state values and functions from different stores
  const { currentElelemt, newImage, updateForm, addImage } =
    useDetailedViewStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPhotoForm),
  });

  //create image html components
  const renderImages = (images) => {
    const imageComponents = images.map((img, index) => {
      return (
        <div key={index} className="col-6 col-lg-4 p-0 m-0">
          <div className="py-3 border img-details-wrapper">
            <img src={img} aria-label="trail" className="details-images" />
          </div>
        </div>
      );
    });
    return imageComponents;
  };

  watch((data) => {
    for (const key in data) {
      updateForm(key, data[key]);
    }
  });

  return (
    <React.Fragment>
      <div className="row m-0 mt-4">
        <div className="col-8">
          <div className="row"></div>
          <h3 className="photo-heading">Add Photos of this trail</h3>
          <div className="row px-2">
            Photos help others discover the trail. Upload photos of this trail
            to inspire others.
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button
            type="button"
            className="btn upload-img-btn"
            data-bs-toggle="modal"
            data-bs-target="#addImgModal"
          >
            Upload
          </button>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="row m-0">
        <div className="container overflow-hidden">
          <div className="row gy-3">
            {currentElelemt.images ? renderImages(currentElelemt.images) : ""}
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="addImgModal"
        tabIndex="-1"
        aria-labelledby="addImgModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <form onSubmit={handleSubmit(addImage)}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title field-heading">Add Image Links</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="col-12">
                  <p className="field-heading m-0">image link</p>
                  <div className="d-flex flex-row">
                    <input
                      type="text"
                      className="filed-input-modal"
                      placeholder="Image link"
                      {...register("newImage")}
                      value={newImage}
                    />
                    <button
                      type="submit"
                      className="btn btn-add-img align-middle"
                      data-bs-dismiss={
                        errors.newImage || newImage === "" ? "" : "modal"
                      }
                    >
                      Add Image
                    </button>
                  </div>
                  {errors.newImage && (
                    <p className="form-error">{errors.newImage.message}</p>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn my-lg-2 btn-discard align-middle"
                  onClick={() => {
                    updateForm("newImage", "");
                  }}
                >
                  Discard File
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
