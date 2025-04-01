import './User.css';
import { useSelector } from 'react-redux';

export const User = () => {
  const user = useSelector((state) => state.user.userData);

  if (user === undefined) {
    return <p>Introduce un nombre de usuario para buscar.</p>;
  }

  return (
    <div className='userCard'>
      <img src={user.avatar_url} alt='avatar' />
      <h2>{user.name}</h2>
      <p><strong>Usuario:</strong> {user.login}</p>
      <p><strong>Repositorios públicos:</strong> {user.public_repos}</p>
      <p><strong>Seguidores:</strong> {user.followers}</p>
    </div>
  );
};
