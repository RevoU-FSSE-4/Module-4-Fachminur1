import { useState } from 'react';

const ListCategory: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [todoText, setTodoText] = useState<string>('');

    const addTodo = () => {
        if (todoText.trim() !== '') {
            setTodos([...todos, todoText]);
            setTodoText('');
        }
    };

    const removeTodo = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Add new todo..."
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListCategory;
