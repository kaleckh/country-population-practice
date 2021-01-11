import React, { Component } from "react";
import "./Test.css";

class Country extends Component(props) {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        {
          name: "china",
          population: "1,439,323,776",
        },
        {
          name:"india",
          population:"1,380,004,385"
        },
        {
          name:"united states",
          population:"331,002,651"
        },
        {
          name: "indonesia",
          population: "273,523,615"
        },
        {
          name:"pakistan",
          population:"220,892,340"
        },
        {
          name:"brazil",
          population:"212,559,417"
        },
        {
          name:"nigeria",
          population:"206,139,589"
        },
        {
          name:"Bangladesh",
          population:"164,689,383"
        },
        {
          name:"russia",
          population:"145,934,462"
        },
        {
          name:"mexico",
          population:"128,932,753"
        }
      ]
    }
  }
  render() {
    const graph = this.state.countries((country, index) => {
    return <div>{this.name}</div>
    })
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
}
export default Country;
