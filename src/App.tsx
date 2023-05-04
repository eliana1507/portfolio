import './App.css';
import About from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Home } from './components/home/Home';
import { WorksHistory } from './components/worksHistory/WorksHistory';
import { WorksHistoryMobile } from './components/worksHistory/WorksHistoryMobile/WorksHistoryMobile';

function App() {
  return (
    <>
      <div className="App box">
        <Home />
      </div>
      <About />
      <WorksHistoryMobile />
      <WorksHistory />
      <Contact />
    </>
  );
}

export default App;
