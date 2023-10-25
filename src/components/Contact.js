import React from "react";

const Contact = props => {
  return (
    <div className="profile">
      <h3>Contact Page</h3>
      <ul className="profile-content">
        <li>
          <h4>Phone Number</h4>
          <p>555-555555</p>
        </li>
        <li>
          <h4>Email</h4>
          <p>national@bank.com</p>
        </li>
        <li>
          <h4>Location</h4>
          <p>27 Maple Drive, Washington DC</p>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
