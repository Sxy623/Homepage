import React from "react";
import "./Dice.css";

export default function Dice() {
  return (
    <div className="box">
      <div class="first-face">
        <span class="pip"></span>
      </div>
      <div class="second-face">
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="third-face">
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="fourth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
      <div class="fifth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
      <div class="sixth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
    </div>
  );
}
