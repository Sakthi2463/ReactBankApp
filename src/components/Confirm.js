import React from "react";

import Summary from "./Summary";

const Confirm = props => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <div className="confirm">
      <div className="notice success">
        <i className="fa fa-smile-o" />
        <p>
          Your transfer has been successfully completed on {today} with
          confirmation number {Math.random() * 10000000000000000}
        </p>
      </div>
      <h3>Summary</h3>
      <Summary form={props.form} />
      <div className="button-holder">
        <input
          type="button"
          className="button CTAButton"
          value="Do Another Transaction"
          onClick={() => props.setRoute("form")}
        />
      </div>
    </div>
  );
};

export default Confirm;
