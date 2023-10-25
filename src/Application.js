import React, { Component } from "react";

import DateUtil from "./util/DateUtil";

import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Confirm from "./components/Confirm";
import Memo from "./components/Memo";
import Verify from "./components/Verify";
import HiddenFields from "./components/HiddenFields";
import Select from "./components/Select";

import "./Application.css";

class Application extends Component {
  constructor(props) {
    super(props);

    //const obj = new DateUtil();
    //let temp = obj.getToday();
    //console.log("temp: " + DateUtil.getToday());

    //Initializing State
    this.state = {
      route: "home",
      fromAccount: 0,
      toAccount: 0,
      transferType: "",
      ammount: 0,
      memo: {
        text: "",
        len: 0
      },
      fromAccounts: [
        { id: "154", amount: 1212.0, name: "Jimmy's Account" },
        { id: "164", amount: 1412.0, name: "Account 1" },
        { id: "174", amount: 1612.0, name: "Account 2" },
        { id: "184", amount: 1812.0, name: "Account 3" },
        { id: "194", amount: 1912.0, name: "Account 4" },
        { id: "204", amount: 2012.0, name: "Account 5" }
      ],
      toAccounts: [
        { id: "164", amount: 1412.0, name: "Account 1" },
        { id: "174", amount: 1612.0, name: "Account 2" },
        { id: "184", amount: 1812.0, name: "Account 3" },
        { id: "194", amount: 1912.0, name: "Account 4" },
        { id: "204", amount: 2012.0, name: "Account 5" }
      ],
      startDate: DateUtil.getToday(),
      //startDate: this.getToday(),
      //startDate: obj.getToday(),
      endDate: null,
      frequency: null,
      modal: false,
      form: [],
      errors: []
    };
  }

  //Helper Functions
  changeFrom(event) {
    const fromAccount = event.target.value;
    let toAccounts = [...this.state.fromAccounts];
    //toAccounts = without(toAccounts, _.find(toAccounts, ["id", fromAccount]));
    const toAccount =
      fromAccount === this.state.toAccount ? 0 : this.state.toAccount;
    this.setState({ fromAccount, toAccounts, toAccount });
  }
  changeTo(event) {
    this.setState({ toAccount: event.target.value });
  }
  changeAmmount(event) {
    this.setState({ ammount: event.target.value });
  }
  changeMemo(event) {
    this.setState({
      memo: { text: event.target.value, len: event.target.value.length }
    });
  }
  changeTransfer(event) {
    this.setState({
      transferType: event.target.value,
      endDate: null,
      frequency: null
    });
  }
  changeFrequency(event) {
    this.setState({ frequency: event.target.value });
  }
  changeStartDate(event) {
    this.setState({ startDate: event.target.value });
  }
  changeEndDate(event) {
    this.setState({ endDate: event.target.value });
  }
  showModal(modal) {
    this.setState({ modal });
  }
  confirmSubmit() {
    this.setState({ modal: false, route: "confirm" });
  }
  restart() {
    this.setState({
      route: "form",
      fromAccount: 0,
      toAccount: 0,
      transferType: "",
      ammount: 0,
      memo: {
        text: "",
        len: 0
      },
      //startDate: this.getToday(),
      startDate: DateUtil.getToday(),
      endDate: null,
      frequency: null,
      modal: false,
      form: [],
      errors: []
    });
  }

  setRoute(route) {
    this.setState({ route });
  }

  validate() {
    let errors = {};
    let valid = true;
    if (!this.state.fromAccount)
      errors.fromAccount = "From Account Field is Required";
    if (!this.state.toAccount)
      errors.toAccount = "To Account Field is Required";
    if (!this.state.startDate)
      errors.startDate = "From Account Field is Required";
    if (!this.state.ammount) errors.ammount = "Ammount Field is Required";
    if (!this.state.transferType) {
      errors.transferType = "Transfer Type Field is Required";
    } else if (this.state.transferType === "Automatic Transfer") {
      if (!this.state.endDate) errors.endDate = "End Date Field is Required";
      if (!this.state.frequency)
        errors.frequency = "Frequency Field is Required";
    }

    if (Object.getOwnPropertyNames(errors).length > 0) valid = false;
    this.setState({ errors });
    console.log(errors);
    return valid;
  }

  //Handle Form Submitting
  handleSubmit(event) {
    event.preventDefault();
    if (!this.validate()) return;
    this.setState({
      modal: true,
      form: [
        { "From Account": this.state.fromAccount },
        { "To Account": this.state.toAccount },
        { "Transfer Type": this.state.transferType },
        { Date: this.state.startDate },
        { "End Date": this.state.endDate },
        { Frequency: this.state.frequency },
        { Ammount: "$" + this.state.ammount },
        { Memo: this.state.memo.text }
      ]
    });
  }

  //Helper Render Function
  showHiddenFields(radio) {
    if (radio === "One Time Transfer") {
      return (
        <fieldset className={this.state.errors.startDate ? "error" : ""}>
          <label className="main-label">Transfer Date</label>
          <input
            type="date"
            value={this.state.startDate}
            onChange={this.changeStartDate.bind(this)}
          />
          <i className="fa fa-calendar fa-fw" />
        </fieldset>
      );
    } else if (radio === "Automatic Transfer") {
      return (
        <HiddenFields
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          frequency={this.state.frequency}
          changeStartDate={this.changeStartDate.bind(this)}
          changeEndDate={this.changeEndDate.bind(this)}
          changeFrequency={this.changeFrequency.bind(this)}
          errors={this.state.errors}
        />
      );
    }
  }

  renderModal() {
    if (!this.state.modal) return;
    console.log("Showing Modal");
    return (
      <div className="modalWindow">
        <div className="modal-content">
          <button
            href="#"
            className="close-button"
            onClick={() => {
              this.showModal(false);
            }}
          />
          <Verify
            form={this.state.form}
            showModal={this.showModal.bind(this)}
            confirmSubmit={this.confirmSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }

  router(route) {
    if (route === "form") {
      return (
        <div>
          <h3>Transfer Funds</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Select
              onChange={this.changeFrom.bind(this)}
              account={this.state.fromAccount}
              title="From account"
              css_class={
                this.state.errors.fromAccount
                  ? "half-width error"
                  : "half-width"
              }
              serverResponse={this.state.fromAccounts}
            />
            <Select
              onChange={this.changeTo.bind(this)}
              account={this.state.toAccount}
              title="To account"
              css_class={
                this.state.errors.toAccount
                  ? "half-width right error"
                  : "half-width right"
              }
              serverResponse={this.state.toAccounts}
            />
            <fieldset
              className={
                this.state.errors.transferType
                  ? "half-width error"
                  : "half-width"
              }
            >
              <label className="main-label">Transfer Type</label>
              <input
                type="radio"
                name="rad_transferType"
                id="radTransferType_ott"
                value="One Time Transfer"
                onClick={this.changeTransfer.bind(this)}
              />
              <label htmlFor="radTransferType_ott">One-Time Transfer</label>
              <br />
              <input
                type="radio"
                name="rad_transferType"
                id="radTransferType_at"
                value="Automatic Transfer"
                onClick={this.changeTransfer.bind(this)}
              />
              <label htmlFor="radTransferType_at">Automatic Transfer</label>
            </fieldset>
            <fieldset
              className={
                this.state.errors.ammount
                  ? "half-width right error"
                  : "half-width right"
              }
            >
              <label className="main-label">Amount</label>
              <i className="fa fa-dollar fa-fw" />
              <input
                type="number"
                value={this.state.ammount}
                onChange={this.changeAmmount.bind(this)}
              />
            </fieldset>
            {this.showHiddenFields(this.state.transferType)}
            <Memo
              onChange={this.changeMemo.bind(this)}
              memo={this.state.memo}
              maxlen={120}
            />
            <fieldset className="button-holder">
              <input
                type="button"
                className="button simpleButton"
                value="Cancel"
              />
              <input type="submit" className="button CTAButton" value="Next" />
            </fieldset>
          </form>
        </div>
      );
    } else if (route === "confirm") {
      return (
        <Confirm form={this.state.form} setRoute={this.restart.bind(this)} />
      );
    } else if (route === "profile") {
      return <Profile />;
    } else if (route === "home") {
      return <Home />;
    } else if (route === "contact") {
      return <Contact />;
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="divMain">
        <Header setRoute={this.setRoute.bind(this)} />
        <section className="mainSection">
          {this.router(this.state.route)}
        </section>
        <input
          type="checkbox"
          name="chkOpenMenu"
          id="chkOpenMenu"
          className="hide"
        />
        <label htmlFor="chkOpenMenu" className="lblOpenMenu smallDisplay">
          <span className="openItem" />
          <span className="closeItem" />
        </label>
        <Footer />
        <input
          type="checkbox"
          name="chkShowFooter"
          id="chkShowFooter"
          defaultChecked="true"
          className="hide"
        />
        {this.renderModal()}
      </div>
    );
  }
}

export default Application;
