import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addNewTodo = ()=>{
    if(newTodo.trim()){
      setTodos([...todos,{id: new Date().valueOf(),text: newTodo}])
      setNewTodo('')
    }
  }

  const deleteTodo =  (index)=>{
    setTodos(todos.filter((e)=> e.id !== index))
  }

  return (
    <div className="nes-container with-title is-centered">
      <p class="title">Lista de Tarefas</p>
      <div className='lists'>
      <ul className='nes-list is-disc'>
        {todos.map((todo,index)=>(<li key={todo.id}>{todo.text}<button onClick={()=>deleteTodo(todo.id)} className="nes-btn is-error">🗑️</button></li>))}
      </ul>
      </div>
      <div class="nes-field is-inline">
        <input type="text" id="inline_field" class="nes-input" placeholder="Nova Tarefa" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <label for="inline_field"><button className="nes-btn is-success" onClick={addNewTodo}>Adicionar</button></label>
      </div>
    </div>
  );
}

export default App;
