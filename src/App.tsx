import './App.css';
import About from './components/About/About';
import { Home } from './components/Home/Home';
import { WorksHistory } from './components/WorksHistory/WorksHistory';
import { WorksHistoryMobile } from './components/WorksHistory/WorksHistoryMobile/WorksHistoryMobile';

function App() {
  return (
    <>
      <div className="App box">
        <Home />
      </div>
      <About />
      <WorksHistoryMobile />
      <WorksHistory />
    </>
  );
}

export default App;
