import React from "react";
import { useFormStore, useGlobalStore } from "../../store";

export default function Cancel() {
  const setPage = useGlobalStore((store) => store.setPage);
  const formReset = useFormStore((store) => store.formReset);
  return (
    <div
      className="modal fade"
      id="cancelModal"
      tabindex="-1"
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
                setPage("browseTrails");
                formReset();
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
