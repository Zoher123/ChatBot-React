import { Component } from "react";
import image from "../img/homeImg.jpg";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "200vh",
        }}
      ></div>
    );
  }
}
