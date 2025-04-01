import './App.css';
import { SearchBar } from './components/SearchBar';
import { User } from './components/User';

function App() {
  return (
    <>
    <div className='App'>
      <h1>Buscador de usuarios de GitHub</h1>
      <SearchBar />
      <User />
    </div>
    </>
  );
}

export default App;

