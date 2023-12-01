import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const TodoItem = ({ todo }) => {
    const updateTodo = async (todoId, completed) => {
        // Récupérer la todo dans la collection todos.
        const currentTodo = doc(db, 'todos', todoId)
        // Mettre à jour la todo dans la collection todos avec le completed.
        await updateDoc(currentTodo, { completed: completed })
            .catch(err => console.log('UpdateTodoError ->', err))
    }

    const deleteTodo = async todoId => {
        // Récupérer la todo dans la collection todos.
        const currentTodo = doc(db, 'todos', todoId)
        // Supprimer la todo dans la collection todos.
        await deleteDoc(currentTodo)
            .catch(err => console.log('DeleteTodoError ->', err))
    }

    return (

        <li key={todo.id}>
            {todo.name} - {todo.completed ? 'Complétée' : 'A faire'}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(todo.id, !todo.completed)}
            />
            <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
        </li>
    )
}

export default TodoItem