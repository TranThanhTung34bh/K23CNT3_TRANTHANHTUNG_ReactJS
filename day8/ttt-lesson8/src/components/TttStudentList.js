import React, { Component } from "react";
import TttStudent from "./TttStudent";

class TttStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    TttHandleView = (TttStudent)=>{
        // Chuyển dữ liệu lên TttApp
        this.props.onTttHandleView(TttStudent);
    }


  render() {
    // lấy dữ liệu trong props từ TttApp chuyển xuống
    let {renderTttStudents} = this.props;
    console.log("List:",renderTttStudents);
    
    // chuyển dữ liệu vào TttStudent để hiển thị
    let TttElementStudent = renderTttStudents.map((TttItem,index)=>{
        return <TttStudent key={index} renderTttStudent={TttItem} onTttHandleView={this.TttHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {TttElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TttStudentList;