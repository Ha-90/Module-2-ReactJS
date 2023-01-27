import React,{Component} from 'react';
class Control extends Component {
  // khởi tạo state chứa DL input search
  constructor() {
    super();
    this.state = {
      searchData: "",
    };
  }
  addNewStudent = () => {
    this.props.actionAndToggleProp(true, "CreateStudent");
  };
  handleChange = (event) => {
    // giá trị nhập vào ô input có tên search khi thực hiện onchange
    let value = event.target.value;
    // lưu giá trị vào state searchData
    this.setState({
      searchData: value,
    });
  };
  handleSearch = (event) => {
    // thực hiện search: chuyển DL searchData sang component App
    this.props.handleSearchProp(this.state.searchData);
    event.preventDefault();
  };
  handleSort = (event) => {
    let value = event.target.value;
    let arrSort = value.split("-");
    // truyền DL lên App
    this.props.handleSortProp(arrSort[0], arrSort[1]);
  };

  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={this.addNewStudent}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                name="search"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={this.handleSearch}
                // onClick={this.handleSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onChange={this.handleSort}>
              <option value=""></option>
              <option value="studentName-ASC">Tên A-Z</option>
              <option value="studentName-DESC">Tên Z-A</option>
              <option value="age-ASC">Tuổi tăng dần</option>
              <option value="age-DESC">Tuổi giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Control;