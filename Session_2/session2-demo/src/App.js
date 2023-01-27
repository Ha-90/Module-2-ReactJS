import logo from './logo.svg';
import './App.css';
import ChildClass from './components/ChildClass';
import ChildFunc from './components/ChildFunc';
import StateDemo from './components/StateDemo';

function App() {
  return (
    <div className="App">
      <h2>Lớp java 10</h2>
      <ChildClass studentName="Hà">90</ChildClass>
      <ChildFunc studentName="Nhung">91</ChildFunc>
      <StateDemo/>
    </div>
  );
}

export default App;
