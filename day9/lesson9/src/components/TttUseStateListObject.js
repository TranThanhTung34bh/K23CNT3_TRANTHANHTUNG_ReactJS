import React, { useState } from "react";

const TttUseStateListObject = () => {
  const [students, setStudents] = useState([
    { id: "SV001", name: "Trịnh Văn Chung", age: 45, class: "K23CNT1" },
    { id: "SV002", name: "Nguyễn Quang A22", age: 23, class: "K23CNT1" },
    { id: "SV003", name: "Nguyễn Quang B21", age: 21, class: "K23CNT1" },
    { id: "SV004", name: "Nguyễn Quang C23", age: 23, class: "K23CNT1" }
  ]);

  return (
    <div>
      <h3>Danh sách sinh viên</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>TttID</th>
            <th>TttName</th>
            <th>TttAge</th>
            <th>TttClass</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TttUseStateListObject;
