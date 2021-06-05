import { FormTodoList } from './components/FormTodoList/FormTodoList';
import { TodoList } from './components/ViewTodoList/TodoList';
import { useState } from 'react';

function App() {

  const [form, setForm] = useState([])

  const handleAddForm = (newTodo) => {
    setForm([
      ...form,
      newTodo
    ])
  }

  return (
    <div className="container">
      <h1 className="text-center">TodoList App</h1>
      <div className="row">
        <FormTodoList newTodo={handleAddForm} />
        <TodoList newTodo={form} />
      </div>
    </div>
  );
}

export default App;
