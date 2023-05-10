import './App.css';
import About from './components/about/About';
import { Contact } from './components/contact/Contacts';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { WorksHistory } from './components/worksHistory/WorksHistory';
import { WorksHistoryMobile } from './components/worksHistory/WorksHistoryMobile/WorksHistoryMobile';

function App() {
  return (
    <main className='bg-white'>
      <div className="App box">
        <Home />
      </div>
      <About />
      <WorksHistoryMobile />
      <WorksHistory />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
