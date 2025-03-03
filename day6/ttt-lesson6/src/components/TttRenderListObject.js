import React, { Component } from 'react';

class TttRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            TttStudents :[
                {TttId:1,TttName:"Trần Thanh Tùng", TttAge:20},
                {TttId:2,TttName:"Nguyễn Quang A", TttAge:20},
                {TttId:3,TttName:"Nguyễn Quang B", TttAge:22},
                {TttId:4,TttName:"Nguyễn Quang C", TttAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {TttStudents} = this.state;
        let TttElement = TttStudents.map((TttItem)=>{
            return (
                <li>{TttItem.TttId} - {TttItem.TttName}</li>
            );
        })

        let TttRenderElement = TttStudents.map((TttItem,index)=>{
            return (
                <tr key={index}>
                    <td>{TttItem.TttId}</td>
                    <td>{TttItem.TttName}</td>
                    <td>{TttItem.TttAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {TttElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>TttID</th>
                            <th>TttName</th>
                            <th>TttAge</th>
                            <th>TttAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {TttRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TttRenderListObject;