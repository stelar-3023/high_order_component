import React, { useEffect, useState } from 'react';
import HOC from './HOC';

const UsersList = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [term, setTerm] = useState('');
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const json = await res.json();
  //     setUsers(json);
  //     console.log(users);
  //   };
  //   fetchUsers();
  // }, []);


  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    );
  });

  // let filteredUsers = users
  //   .filter(({ name }) => {
  //     return name.indexOf(term) >= 0;
  //   })
  //   .map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p>{user.name}</p>
  //       </div>
  //     );
  //   });

  return (
    <div>
    {/* <h2>Users</h2>
      <input
        type='text'
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      /> */}
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, 'users');

export default SearchUsers;
