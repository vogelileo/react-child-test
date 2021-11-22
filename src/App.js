import './App.css';
import ChildComponent from './assets/ChildComponent';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ChildComponent
          onButtonClick={(e) => {
            console.log(e.target.textContent);
          }}
        />
      </header>
    </div>
  );
}

export default App;
