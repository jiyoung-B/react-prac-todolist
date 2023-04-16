import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({filter}) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage()
  //   [
  //   {id: '123', text: '장보기', status:'active'},
  //   {id: '124', text: '공부하기', status:'active'}
  // ]
  );

  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이트 해야한다
    console.log(todo);
    setTodos([...todos, todo]);
  }

  const handleUpdate = (updated) => 
    setTodos(todos.map((t) =>( t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
     setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

     const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
        {filtered.map((item) => (<Todo key={item.id} 
        todo={item}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        >{item.text}</Todo>))}
      </ul>
      <AddTodo onAdd={handleAdd} />
      
    </section>
  );
}

function readTodosFromLocalStorage(){
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if(filter === 'all'){
    return todos;
  }
  return todos.filter(todo => todo.status === filter)
}
