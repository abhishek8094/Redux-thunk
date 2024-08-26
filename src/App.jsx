import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/slice/todo"; 

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo); 
  // console.log(state);

  if (state.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodo())}>fetchTodo</button>
      <ol>
        {state.data && state.data.map((item) => (
          <li key={item.id}>{item.title}</li> 
        ))}
      </ol>
    </div>
  );
}

export default App;
