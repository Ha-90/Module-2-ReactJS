import logo from "./logo.svg";
import "./App.css";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: false,
      student: {},
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyen Van A",
          age: 20,
          sex: true,
          birthDate: "2000-01-01",
          birthPlace: "HN",
          address: "Ha Noi"
        },
        {
          studentId: "SV002",
          studentName: "Nguyen Van B",
          age: 22,
          sex: true,
          birthDate: "2002-02-02",
          birthPlace: "DN",
          address: "Da Nang"
        },
        {
          studentId: "SV003",
          studentName: "Nguyen Xuan C",
          age: 24,
          sex: false,
          birthDate: "2004-04-04",
          birthPlace: "TP HCM",
          address: "HCM City"
        },
      ],
      searchData: "",
      sortDir: "",
      sortBy: "",
      selectedStudent: {},
      actionName: "",
    };
  }
  handleActionAndToggle = (status, actionName, studentInfo) => {
    this.setState({
      isToggle: status,
      actionName: actionName,
      selectedStudent: studentInfo
    });
  };

  handleView = (student) => {
    this.setState({ student: student });
  };
  handleSearch = (searchData) => {
    // nhận DL từ searchData từ Control và lưu vào state
    // console.log(searchData);
    this.setState({
      searchData: searchData,
    });
  };
  handleSort = (sortDir, sortBy) => {
    // console.log("sortDir", sortDir);
    // console.log("sortBy", sortBy);
    // Lưu vào trong state
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy,
    });
  };
  handleCreate = (isToggle, newStudent)=>{
    // thêm mới sv
    this.setState({
      isToggle: isToggle,
    });
    // thêm vào state.students
    this.state.students.push(newStudent);
  }
  handleUpdate = (isToggle, studentUpdate)=>{
    // th update
    let students = this.state.students.map((st)=>{
      if(st.studentId == studentUpdate.studentId){
        return studentUpdate;
      } else {
        return st;
      }
    })
    this.setState({
      isToggle: false,
      students: students
    });
  }
  render() {
    // thực hiện search
    let students = [];
    if (this.state.searchData != "") {
      this.state.students.forEach((st) => {
        if (st.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
          students.push(st);
        }
      });
    } else {
      students = [...this.state.students];
    }

    // thực hiện sort
    if (this.state.sortDir != "") {
      if (this.state.sortDir == "studentName") {
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) => a.studentName > b.studentName ? 1 : a.studentName < b.studentName ? -1 : 0);
        } else {
          // sortBy == DESC
          students.sort((a, b) => a.studentName > b.studentName ? -1 : a.studentName < b.studentName ? 1 : 0);
        }
      } else {
        // sortDir == age
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) => a.age - b.age);
        } else {
          // sortBy == DESC
          students.sort((a, b) => b.age - a.age);
        }
      }
    }
    let elementForm;
    if (this.state.isToggle) {
      elementForm = <Form dataStudent={this.state.student} selectedStudent={this.state.selectedStudent} actionName={this.state.actionName} handleCreateProp={this.handleCreate} handleUpdateProp={this.handleUpdate}></Form>;
    } else {
      elementForm = "";
    }

    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control
                actionAndToggleProp={this.handleActionAndToggle}
                addNewStudent={this.addNewStudent}
                handleSearchProp={this.handleSearch}
                handleSortProp={this.handleSort}
              ></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent
                actionAndToggle={this.handleActionAndToggle}
                students={students}
                handleView={this.handleView}
              ></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
          {/* END FORM SINH VIÊN */}
        </div>
      </div>
    );
  }
}
export default App;
