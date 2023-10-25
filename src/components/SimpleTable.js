import React, { Component } from "react";

class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: []
    };
  }

  componentWillMount() {
    this.setState({ header: Object.getOwnPropertyNames(this.props.data[0]) });
  }

  renderHeader(columns) {
    return (
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <td key={index}>{column}</td>;
          })}
        </tr>
      </thead>
    );
  }

  renderBody(rows, columns) {
    return (
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, innerIndex) => {
                return <td key={innerIndex}>{row[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }

  render() {
    if (this.state.header.length === 0) return false;
    return (
      <div className="transfer-activity-table">
        <table className="">
          {this.renderHeader(this.state.header)}
          {this.renderBody(this.props.data, this.state.header)}
        </table>
      </div>
    );
  }
}

export default SimpleTable;
