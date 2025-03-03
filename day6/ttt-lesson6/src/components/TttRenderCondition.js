import React, { Component } from 'react';
import TttLoginControl from './TttLoginControl';

class TttRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        TttHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        TttHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <TttLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button onClick={this.TttHandleLogout}>Logout</button>
                        :<button onClick={this.TttHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default TttRenderCondition;