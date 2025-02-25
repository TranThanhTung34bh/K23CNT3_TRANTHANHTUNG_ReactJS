import React, { Component } from 'react';

class TttEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            TttStudentName:'Tùng Trần',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (TttStudentName) thay đổi
    TttHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            TttStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    TttHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.TttStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.TttHandleSubmit}>
                    <label htmlFor='TttStudentName'>
                        <input type='text' name='TttStudentName' id='TttStudentName' 
                            value={this.state.TttStudentName}
                            onChange={this.TttHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default TttEventForm1;