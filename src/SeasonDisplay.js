import React, { Component } from "react";

export default class SeasonDisplay extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      }
    );
    return <div>Latitude: </div>;
  }
}
