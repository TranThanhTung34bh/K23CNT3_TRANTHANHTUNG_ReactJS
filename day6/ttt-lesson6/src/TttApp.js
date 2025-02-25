import React, { Component } from 'react';
import TttEventForm1 from './components/TttEventForm1';
import TttEventForm2 from './components/TttEventForm2';
import TttEventForm3 from './components/TttEventForm3';
import TttEventForm4 from './components/TttEventForm4';
import TttEventForm5 from './components/TttEventForm5';

class TttApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  TttHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <TttEventForm1 />
          <TttEventForm2 />
          <TttEventForm3 />
          <TttEventForm4 />
          <TttEventForm5 onTttHandleSubmit={this.TttHandleSubmitForm}/>
      </div>
    );
  }
}

export default TttApp;