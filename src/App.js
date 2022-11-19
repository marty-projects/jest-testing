import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    {id: 1, title: 'make doctor app', completed: false},
    {id: 2, title: 'buy mosquito net', completed: true},
  ]
  return (
    <div className="App">
        { todos.map((todo) => {
          return (<Todo todo={todo}/>)
        })
        }
    </div>
  );
}

export default App;
