import React, { Component } from 'react'

export default class StateDemo extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "Phạm Thanh Hà",
    };
  }
  changeNameStudent = ()=>{
    this.setState({
        studentName: "Trương Thị Nhung"
    })
  }
  render() {
    return (
      <div>
        <p>Chào mừng bạn {this.state.studentName}</p>
        <button onClick={this.changeNameStudent}>Change Name</button>
      </div>
    );
  }
}
