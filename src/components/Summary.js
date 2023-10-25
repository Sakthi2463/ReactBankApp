import React from "react";

const Summary = props => {
  return (
    <dl>
      {props.form.map(field => {
        let key = Object.getOwnPropertyNames(field);
        if (!field[key[0]]) return null;
        return (
          <div key={key[0] + field[key[0]]}>
            <dt>{key[0]}</dt>
            <dd>{field[key[0]]}</dd>
          </div>
        );
      })}
    </dl>
  );
};

export default Summary;
