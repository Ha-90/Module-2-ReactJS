import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoTable from './components/TodoTable';

function App() {
  return (
    <div className="App">
      <div id="Header">
        <Header></Header>
      </div>
      <div id='TodoTable'>
        <TodoTable></TodoTable>
      </div>
    </div>
  );
}

export default App;
