import React from "react";

import Summary from "./Summary";

const Verify = props => {
  return (
    <div>
      <h3>Please verify your data</h3>
      <div className="modal-body">
        <Summary form={props.form} />
        <fieldset className="button-holder">
          <input
            type="button"
            className="button simpleButton"
            value="Previous"
            onClick={() => props.showModal(false)}
          />
          <input
            type="submit"
            className="button CTAButton"
            value="Submit"
            onClick={() => props.confirmSubmit()}
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Verify;
