import React, { Component } from "react";
const mainStyle = {
  backgroundColor: "#e06666",
  padding: "20px",
  width: "70%",
};
class Main extends Component {
  render() {
    return <div style={mainStyle}>{this.props.children}</div>;
  }
}

export default Main;
