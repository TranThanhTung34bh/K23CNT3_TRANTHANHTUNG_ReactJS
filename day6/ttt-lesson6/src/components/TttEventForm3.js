import React, { Component } from 'react';

class TttEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            TttGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    TttHandleChange = (event)=>{
        this.setState({
            TttGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    TttHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.TttGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='TttGioiTinh'  id='TttNam' className='mx-2'
                            value="Nam" checked={this.state.TttGioiTinh === 'Nam'} onChange={this.TttHandleChange}/> 
                            <label htmlFor='TttNam'>Nam</label>  
                        <input type='radio' name='TttGioiTinh'  id='TttNu' className='mx-2'
                            value="Nữ" checked={this.state.TttGioiTinh === 'Nữ'} onChange={this.TttHandleChange}/> 
                            <label htmlFor='TttNu'>Nữ</label>  
                        <input type='radio' name='TttGioiTinh' id='TttKhac' className='mx-2'
                            value="Khác" checked={this.state.TttGioiTinh === 'Khác'} onChange={this.TttHandleChange}/> 
                            <label htmlFor='TttKhac'>Khác</label>
                    </div>
                    <button onClick={this.TttHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TttEventForm3;