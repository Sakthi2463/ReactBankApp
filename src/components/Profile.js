import React from "react";

import SimpleTable from "./SimpleTable";

const pendingData = [
  {
    Type: "Automatic",
    Amount: "$2.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/23/2016"
  },
  {
    Type: "Automatic",
    Amount: "$2.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/23/2016"
  },
  {
    Type: "Automatic",
    Amount: "$2.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/23/2016"
  },
  {
    Type: "Automatic",
    Amount: "$2.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/23/2016"
  },
  {
    Type: "Automatic",
    Amount: "$2.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/23/2016"
  },
  {
    Type: "Automatic",
    Amount: "$2.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/23/2016"
  }
];

const processedData = [
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  },
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  },
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  },
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  },
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  },
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  },
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  },
  {
    Type: "Automatic",
    Amount: "$5.99",
    From: "Account 1",
    To: "Account 2",
    "Transaction Date": "05/24/2016"
  }
];

const Profile = props => {
  return (
    <div className="transfer-activity profile">
      <h3>Transfer Activity</h3>
      <h4>Pending Transfers</h4>
      <SimpleTable data={processedData} />
      <h4>Processed Transfers</h4>
      <SimpleTable data={pendingData} />
    </div>
  );
};

export default Profile;
