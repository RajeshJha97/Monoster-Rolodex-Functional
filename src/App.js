import CardList from './components/card-list/card-list.components';
import SearchBox from './components/Search-box/search-box.components';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);

  const changeHandler = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchString(searchField);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchString);
  });
  console.log({ filteredMonsters });

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='app-title'>MONSTER ROLODEX</h1>
      <SearchBox
        type={'search'}
        placeholder='Search Monsters'
        onChangeHandler={changeHandler}
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
