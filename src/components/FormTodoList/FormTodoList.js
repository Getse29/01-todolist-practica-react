import { nanoid } from "nanoid";
import { useForm } from "../hooks/useForm";

export const FormTodoList = ({ newTodo }) => {

  let iniState = {
    id: nanoid(6)
  }

  const [values, handleInput, resetForm, reset] = useForm(iniState);

  const handleSubmit = e => {
    e.preventDefault();

    const { tarea } = values;
    if (tarea[0].trim().length <= 0) {
      return console.log('Inserte un caracter')
    }

    newTodo(values)
    resetForm(e);
    reset();
  }


  return (
    <div className="col-6">
      <h2 className="text-center mb-3">New Todo List</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          className="form-control"
          onChange={handleInput}
          name="tarea"
        />

        <button
          className="btn btn-success mt-2 float-end"
        >
          Enviar
        </button>
      </form>
    </div>

  )
}
