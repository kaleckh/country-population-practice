import React from "react";
import "./Test.css";

function Country(props) {
  return (
    <>
      <div class="country">{props.name}</div>
      <div class="bar">
        <div
          style={{
            width: props.width,
            backgroundColor: props.color,
          }}
          class="colored-bar"
        ></div>
      </div>
      <div class="population">{props.population}</div>
    </>
  );
}
export default Country;
