import React, { Component } from 'react'
import Form from './component/Form'
import ListStudent from './component/ListStudent'

export default class
  extends Component {
    constructor(props){
      super(props);
      this.state={
        students : [
          { studentId:"SV001", studentName: "Nguyễn Văn A", age: 20,address: "25, Vũ Ngọc Phan"},
          { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21,address: "25, Vũ Ngọc Phan"},
          { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19,address: "25, Vũ Ngọc Phan"},
          { studentId:"SV004", studentName: "Nguyễn Văn C", age: 19,address: "25, Vũ Ngọc Phan"}
        ],
        student:"",
      }
    }
    //xem
    handleView=(student)=>{
      //dùng để cập nhập state -> sau đó đẩy xuống form
      this.setState({
        student:student
      })
    }
    //cập nhập dữ liệ mới
    handleUpdate=(student)=>{
      let {students}=this.state;
      for (let i = 0; i < students.length; i++) {
        if(students[i].studentId===student.studentId){
          students[i]=student;
        }
        
      }
      //cập nhập lại state
      this.setState({
        student:student
      })
    }

    //xóa
    handleDelete=(student)=>{
      //lấy đối tuongự sv
      let{students}=this.state;
      let list=students.filter(x=>x.studentId !== student.studentId );
      this.setState({
        students:list
      })
    }
    //thêm vào form
    handleSubmit=(student)=>{
      let students=this.state.students; // nó lấy giá trị hiện tại của mảng students
      students=[...students,student] //nó tạo ra một mảng mới bằng cách sử dụng toán tử spread [...] để sao chép các phần tử hiện có trong students, 
                                       //sau đó thêm student mới vào cuối mảng.
      this.setState({  //được sử dụng để cập nhật lại trạng thái students
        students:students
      })
    }
  render() {
    let {students}=this.state;
    return (
      <div id="container">
        <div className="frm-sv">
         <ListStudent 
         renderStudents={students}
        onView={this.handleView}
        onDelete={this.handleDelete}
         />
        </div>
       <Form 
      //  
       renderStudent={this.state.student}
       onUpdate={this.handleUpdate}
      onSubmit={this.handleSubmit}
       />
      </div>

    )
  }
}
