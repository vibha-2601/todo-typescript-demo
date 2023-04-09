import React from 'react';
import './TodoList.css';
import { Todo } from '../../model';
import SingleTodo from '../SingleTodo/SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {
        todos.map((todo) => (
           <SingleTodo />
        ))
      }
    </div>
  )
}

export default TodoList

