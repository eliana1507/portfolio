import './App.css';
import About from './components/About/About';
import { Home } from './components/Home/Home';
import { WorkHistory } from './components/WorksHistory/WorksHistory';

function App() {
  return (
    <>
      <div className="App box">
        <Home />
      </div>
      <About />
      <WorkHistory />
    </>
  );
}

export default App;
