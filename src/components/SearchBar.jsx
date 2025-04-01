import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import './SearchBar.css';

export const SearchBar = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) throw new Error('Usuario no encontrado');
        return response.json();
      })
      .then((data) => dispatch(addUser(data)))
      .catch((err) => {
        dispatch(addUser(undefined));
        alert(err.message);
      });
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Introduce nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

