import React, { Component } from "react";
class Form extends Component {
  constructor(){
    super();
    this.state = {
      studentId: "",
      studentName: "",
      age: "",
      sex: "",
      birthDate: "",
      birthPlace: "",
      address: ""
    }
  }
  handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  handleCreate = (e)=>{
    // chuyển info sv lưu state lên App
    let newStudent = {
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      age: this.state.age,
      sex: this.state.sex,
      birthDate: this.state.birthDate,
      birthPlace: this.state.birthPlace,
      address: this.state.address
    };
    this.props.handleCreateProp(false, newStudent);
    e.preventDefault();
  }
  componentWillMount = ()=>{
    let {selectedStudent} = this.props;
    this.setState({
      studentId: selectedStudent.studentId,
      studentName: selectedStudent.studentName,
      age: selectedStudent.age,
      sex: selectedStudent.sex,
      birthDate: selectedStudent.birthDate,
      birthPlace: selectedStudent.birthPlace,
      address: selectedStudent.address
    })
  }
  componentWillReceiveProps = (nextProps)=>{
    let {selectedStudent} = nextProps;
    this.setState({
      studentId: selectedStudent.studentId,
      studentName: selectedStudent.studentName,
      age: selectedStudent.age,
      sex: selectedStudent.sex,
      birthDate: selectedStudent.birthDate,
      birthPlace: selectedStudent.birthPlace,
      address: selectedStudent.address,
    });
  }
  handleUpdate = (e)=>{
    let studentUpdate = {
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      age: this.state.age,
      sex: this.state.sex,
      birthDate: this.state.birthDate,
      birthPlace: this.state.birthPlace,
      address: this.state.address,
    };
    this.props.handleUpdateProp(false, studentUpdate)
    e.preventDefault();
  }
  render() {
    // let { dataStudent } = this.props;
    let {actionName} = this.props;
    let elementSubmit = "";
    if(actionName == "CreateStudent"){
      elementSubmit = <button type="submit" className="btn btn-primary me-2" onClick={this.handleCreate}>
                Create
              </button>
    } else if(actionName == "UpdateStudent"){
      elementSubmit = <button type="submit" className="btn btn-primary me-2" onClick={this.handleUpdate}>
                Update
              </button>
    }
    return (
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="studentId"
                    value={this.state.studentId} onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="studentName"
                    value={this.state.studentName} onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="age"
                    value={this.state.age} onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="sex"
                    value={this.state.sex}
                    onChange={this.handleChange}
                    >
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    type={"date"}
                    name="birthDate"
                    value={this.state.birthDate} onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select className="form-control">
                    <option value={""}>Chọn nơi sinh</option>
                    <option value={"HN"}>Hà Nội</option>
                    <option value={"HCM"}>TP. Hồ Chí Minh</option>
                    <option value={"DN"}>Đà Nẵng</option>
                    <option value={"QN"}>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control" defaultValue={this.state.address} name="address" onChange={this.handleChange} />
                </div>
              </div>
              {elementSubmit}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
