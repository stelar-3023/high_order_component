import React, { useEffect, useState } from 'react';
import HOC from './HOC';

const TodoList = ({ data }) => {
  // const [todos, setTodos] = useState([]);
  // const [term, setTerm] = useState('');
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const json = await res.json();
  //     setTodos(json);
  //     console.log(todos);
  //   };
  //   fetchTodos();
  // }, []);

  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>{todo.title}</p>
      </div>
    );
  });

  // let filteredTodos = todos
  //   .filter(({ title }) => {
  //     return title.indexOf(term) >= 0;
  //   })
  //   .slice(0, 10)
  //   .map((todo) => {
  //     return (
  //       <div key={todo.userId}>
  //         <p>{todo.title}</p>
  //       </div>
  //     );
  //   });

  return (
    <div>
      {/* <h2>Todos</h2>
      <input
        type='text'
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      /> */}
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, 'todos');


export default SearchTodos;
