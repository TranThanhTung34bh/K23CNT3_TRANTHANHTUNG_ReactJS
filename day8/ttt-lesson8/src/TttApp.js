import React, { Component } from 'react';
import TttControl from "./components/TttControl";
import TttStudentList from "./components/TttStudentList";
import TttForm from "./components/TttForm";

class TttApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      TttStudents:[
        {TttId:"SV001",TttStudentName:"Trần Thanh Tùng",TttAge:20,TttGender:"Nam",TttBirthday:"30/05/2005",TttBirthPlace:"HN", TttAddress:"Hà Nội"},
        {TttId:"SV002",TttStudentName:"Chu Nguyên Chương",TttAge:188,TttGender:"Nữ",TttBirthday:"25/05/1179",TttBirthPlace:"HP", TttAddress:"Trung quốc"},
        {TttId:"SV003",TttStudentName:"Tần Thủy Hoàng",TttAge:55,TttGender:"Nam",TttBirthday:"25/05/1079",TttBirthPlace:"TpHCM", TttAddress:"Trung Quốc"},
        {TttId:"SV004",TttStudentName:"Hoàng Thùy Linh",TttAge:55,TttGender:"Nam",TttBirthday:"25/05/1079",TttBirthPlace:"TpHCM", TttAddress:"Hồ chí minh"},
      ],
      TttStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  TttHandleView = (TttStudent)=>{
    this.setState({
      TttStudent:TttStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.TttStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Trần Thanh Tùng - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <TttControl  />
                {/* danh sách sinh vien  */}
                <TttStudentList  renderTttStudents={this.state.TttStudents} onTttHandleView={this.TttHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <TttForm  renderTttStudent = {this.state.TttStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TttApp;