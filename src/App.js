import FilterMenu from './FilterMenu';
import Title from './HeaderBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <FilterMenu></FilterMenu>
      </header>
    </div>
  );
}

export default App;