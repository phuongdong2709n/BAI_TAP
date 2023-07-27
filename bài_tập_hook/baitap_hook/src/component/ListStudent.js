import React, { Component } from 'react'


export default class 
 extends Component {
  handleView=(student)=>{
    this.props.onView(student);
}
//xóa

handleDelete=(student)=>{ //chuyền đối tượng càn xóa là student
  this.props.onDelete(student); //đẩy đối tượng lên App
}
  render() {
    let {renderStudents}=this.props;
    let elementStudent=renderStudents.map((student,stt)=>{
      return (
        <tr key={stt+1}>
            <td>{stt+1}</td>
            <td>{student.studentId}</td>
            <td> {student.studentName}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
            <td>
                <button type="button" onClick={()=>this.handleDelete(student)}>Xóa</button>
                <button onClick={()=>this.handleView(student)}>Xem</button>
            </td>
        </tr>
    )
    })
    return (
      <div>
        <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã SV</th>
                <th>HỌ VÀ TÊN</th>
                <th>NGÀY SINH</th>
                <th>ĐỊA CHỈ</th>
                <th>CHỨC NĂNG</th>
              </tr>
            </thead>
            <tbody>
                {elementStudent}
            </tbody>
          </table>
      </div>
    )
  }
}
