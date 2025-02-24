import React, { Component } from "react";

class TttClassCompPostData extends Component {
  sendDataToApp = () => {
    this.props.onDataReceive("Ttt Dữ liệu từ component con");
  };

  render() {
    return (
      <div className="section gray">
        <h3>Dữ liệu từ component con - ClassCompEventPostData</h3>
        <button className="btn blue" onClick={this.sendDataToApp}>
          Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}

export default TttClassCompPostData;
