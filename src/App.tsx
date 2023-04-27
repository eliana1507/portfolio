import './App.css';
import About from './components/About/About';
import { Home } from './components/Home/Home';

function App() {
  return (
    <>
      <div className="App box">
        <Home />
      </div>
      <About />
    </>
  );
}

export default App;
