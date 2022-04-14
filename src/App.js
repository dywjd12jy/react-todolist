import './App.css';
import Title from "./Components/Title";
import Todo from './Components/Todo';
import Complete from './Components/Complete';


function App() {
  return (
    <>
    <div className='wrapper'>
      <Title />
      <div className='todo-wrapper'>
        <Todo />
        <Complete />
      </div>
    </div>
    </>
  );
};

export default App;
