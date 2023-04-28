import './App.css';
import About from './components/About/About';
import { Home } from './components/Home/Home';
import { WorksHistory } from './components/WorksHistory/WorksHistory';

function App() {
  return (
    <>
      <div className="App box">
        <Home />
      </div>
      <About />
      <WorksHistory />
    </>
  );
}

export default App;
