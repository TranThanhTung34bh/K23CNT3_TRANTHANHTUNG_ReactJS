import React, { Component } from "react";

class TttEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            TttSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    TttHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.TttSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            TttSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    TttHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.TttSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.TttSelectCheckBox.includes("Apple")}
              onChange={this.TttHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.TttSelectCheckBox.includes("Banana")}
              onChange={this.TttHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.TttSelectCheckBox.includes("Orange")}
              onChange={this.TttHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.TttHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TttEventForm4;
