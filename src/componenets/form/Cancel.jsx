import React from "react";
import { useFormStore, useGlobalStore } from "../../store";

export default function Cancel() {
  //get state values and functions from different stores
  const { setPage, currentPage } = useGlobalStore();
  const formReset = useFormStore((store) => store.formReset);

  return (
    // cancel modal
    <div
      className="modal fade"
      id="cancelModal"
      tabIndex="-1"
      aria-labelledby="cancelModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cancelModalLabel">
              Discard form and continue?
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => {
                currentPage !== "details" && setPage("browseTrails");
                currentPage !== "details" && formReset();
              }}
            >
              Discard Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
