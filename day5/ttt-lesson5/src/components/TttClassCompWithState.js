import React, { Component } from "react";

class TttClassCompWithState extends Component {
  state = {
    text: "Dữ liệu trong state",
  };

  render() {
    return (
      <div className="section red">
        <h3>Class Component - Event; state</h3>
        <button className="btn blue">Button 1 - {this.state.text}</button>
      </div>
    );
  }
}

export default TttClassCompWithState;
