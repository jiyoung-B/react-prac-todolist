import React, { useState } from 'react'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'

const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState([0]);

  return (
    <>
      <Header filters={filters}
      filter={filter}
      onFilterChange={(filter) => setFilter(filter)}/>
    <TodoList filter={filter} />
    </>
  )
}
