import React, { Component } from 'react';

class TttEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            TttCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    TttHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            TttCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    TttHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.TttCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='TttCourse' id='TttCourse' 
                            value={this.state.TttCourse}
                            onChange={this.TttHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.TttHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default TttEventForm2;