import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      // .then(data=>console.log(data))//o/p = Object info: {...} results: (15) [{…}, {…},...]
      .then(data => setUsers(data.results))
  }, []);

  const addMember = (name) => {
    setTeam([...team, name]);
  };

  return (
    <div className="App">
      <h2>Team Builder</h2>
      <ul className="ulStyle">
        {
          team.map((member, indx) => <li key={indx}> {member}</li>)
        }
      </ul>
      {
        users.map(user => <User user={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
