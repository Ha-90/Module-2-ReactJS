import React, { Component } from "react";
class Student extends Component {
  handleUpdate = (student) => {
    this.props.actionAndToggle(true, "UpdateStudent", student);
  };
  handleView = () => {
    this.props.actionAndToggle(true);
    this.props.handleView(this.props.stInfo);
  };
  render() {
    let { stInfo } = this.props;
    // console.log(this.props);
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{stInfo.studentId}</td>
        <td>{stInfo.studentName}</td>
        <td>{stInfo.age}</td>
        <td>{stInfo.sex ? "Nam" : "Nữ"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={this.handleView}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={()=>this.handleUpdate(stInfo)}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={this.handleDelete}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
export default Student;
