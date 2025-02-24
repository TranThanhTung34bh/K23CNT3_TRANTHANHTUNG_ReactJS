import React, { Component } from "react";

class TttClassCompWithProps extends Component {
  render() {
    return (
      <div className="section red">
        <h3>Class Component - Event; props</h3>
        <button className="btn blue">{this.props.buttonText}</button>
      </div>
    );
  }
}

export default TttClassCompWithProps;
