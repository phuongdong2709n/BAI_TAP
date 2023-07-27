import React, { Component } from 'react'

export default class
  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: 0,
      address: ""
    }
  }
//cập nhập
//lấy trong this.props
componentWillMount=()=>{
    let {renderStudent}=this.props
    this.setState  (
      {
        studentId: renderStudent.studentId,
        studentName:renderStudent.studentName ,
        age: renderStudent.age,
        address: renderStudent.address
      }
    )
  }
  //do là mount cho lần đàu tiên lên ko chạy đc
  //sau khi chuyển đổ dữ liệu thì ta lấy trog nextProps
  componentWillReceiveProps=(nextProps)=>{
    let {renderStudent}=nextProps;
    this.setState  (
      {
        studentId: renderStudent.studentId,
        studentName:renderStudent.studentName ,
        age: renderStudent.age,
        address: renderStudent.address
      }
    )
  }

  //thay đổi dữ liệu trên form
  handleChangle=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    //cập nhập lại
    this.setState({
      [name]:value
    })
  }
  //cập nhậpp lại
  handleUpdate=(ev)=>{
    ev.preventDefault();
    let student={
      studentId: this.state.studentId,
      studentName:this.state.studentName ,
      age: this.state.age,
      address: this.state.address
    }
  
    this.props.onUpdate(student);
  }
  //cập nhập dữ liệu từ bán phím vầo form
  handleSubmit=(event)=>{
    event.preventDefault(); //Mục đích của hàm này là ngăn chặn hành vi mặc định của form (tải lại trang) 
                              //bằng cách sử dụng event.preventDefault()
    this.props.onSubmit(this.state);
    // gọi prop onSubmit được truyền vào từ component cha với tham số là giá trị hiện tại của state (this.state).
  }
  render() {
    return (
      <div className="frm-thontin">
        <form action="" method="post">
          <label htmlFor="">THÔNG TIN SINH VIÊN</label>
          <div>
            <label htmlFor="studentId">mã sinh viên</label>
            <input type="text" name="studentId" id="studentId"
            value={this.state.studentId}
            onChange={this.handleChangle}
            />
          </div>
          <div>
            <label htmlFor="studentName">Họ và tên</label>
            <input type="text" name="studentName" id="studentName" 
             value={this.state.studentName}
             onChange={this.handleChangle}
            />
          </div>
          <div>
            <label htmlFor="age">tuổi</label>
            <input type="text" name="age" id="age"
             value={this.state.age}
             onChange={this.handleChangle}
            />
          </div>
          <div>
            <label htmlFor="address">Địa chỉ</label>
            <input type="text" name="address" id="address" 
             value={this.state.address}
             onChange={this.handleChangle}
            />
          </div>
          <div>
            <button type="button" onClick={this.handleUpdate}>Cập nhập</button>
            <button onClick={this.handleSubmit}>Thêm</button>
          </div>
        </form>
      </div>
    )
  }
}
