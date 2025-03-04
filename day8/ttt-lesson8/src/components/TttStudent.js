import React, { Component } from "react";

class TttStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    TttHandleView = (TttStudent)=>{
        // Chuyển lên TttStudentList
        this.props.onTttHandleView(TttStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ TttStudentList
    let {renderTttStudent, key} = this.props;
    console.log("Student:",renderTttStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderTttStudent.TttId}</td>
          <td>{renderTttStudent.TttStudentName}</td>
          <td>{renderTttStudent.TttAge}</td>
          <td>{renderTttStudent.TttGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.TttHandleView(renderTttStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default TttStudent;