import React from "react";
import "./Test.css";
import Country from "./Country";

function Test() {
  return (
    <div class="wrapper">
      <Country name="China" population="12345" width="60%" color="yellow" />
      <Country name="mexico" population="12345" width="10%" color="orange" />

      <div class="country">india</div>
      <div class="bar">
        <div class="india colored-bar"></div>
      </div>
      <div class="population">1231234</div>

      <div class="country">united states</div>
      <div class="bar">
        <div class="usa colored-bar"></div>
      </div>
      <div class="population">1231234</div>

      <div class="country">uruguay</div>
      <div class="bar">
        <div class="uruguay colored-bar"></div>
      </div>
      <div class="population">1231234</div>

      <div class="country">uruguay</div>
      <div class="bar">
        <div class="uruguay colored-bar"></div>
      </div>
      <div class="population">1231234</div>

      <div class="country">brazil</div>
      <div class="bar">
        <div class="brazil colored-bar"></div>
      </div>
      <div class="population">1231234</div>
    </div>
  );
}

export default Test;
