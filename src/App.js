import './App.css';
import Title from "./Components/Title";
import Todo from './Components/Todo';
import Complete from './Components/Complete';


function App() {
  return (
    <>
    <div className='wrapper'>
      <Title />
      ㄱㅏ나다라 깃헙 클론 테스트
      <div className='todo-wrapper'>
        <Todo />
        <Complete />
      </div>
    </div>
    </>
  );
};

export default App;
