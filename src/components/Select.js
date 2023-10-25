import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //Load Data here!
  }

  render() {
    return (
      <fieldset className={this.props.css_class}>
        <label>{this.props.title}</label>
        <i className="fa fa-user fa-fw" />
        <select onChange={this.props.onChange} value={this.props.account}>
          {this.props.serverResponse.map(option => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </fieldset>
    );
  }
}

export default Select;
