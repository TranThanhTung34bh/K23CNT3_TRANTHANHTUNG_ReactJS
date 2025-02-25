import React, { Component } from 'react';

class TttEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            TttName:'Tùng',
            TttAge:20,
            TttGender:'Female',
            TttCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    TttHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    TttHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.TttName + "\n" + this.state.TttAge);

        // Chuyển dữ liệu trên form lên App component (TttApp);
        this.props.onTttHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='TttName'>Student Name:</label>
                        <input type='text' name='TttName' id='TttName' 
                            value={this.state.TttName}
                            onChange={this.TttHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='TttAge'>Student Age:</label>
                        <input type='text' name='TttAge' id='TttAge' 
                            value={this.state.TttAge}
                            onChange={this.TttHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='TttGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='TttGender' id='TttMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.TttGender === 'Male'}
                                onChange={this.TttHandleChange} />
                            <label htmlFor='TttMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='TttGender' id='TttFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.TttGender === 'Female'}
                                onChange={this.TttHandleChange} />
                            <label htmlFor='TttFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='TttGender' id='TttNone' className='mx-2'
                                value={'None'}
                                checked={this.state.TttGender === 'None'}
                                onChange={this.TttHandleChange} />
                            <label htmlFor='TttNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='TttCourse'>
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
                    </div>
                    <button onClick={this.TttHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TttEventForm5;