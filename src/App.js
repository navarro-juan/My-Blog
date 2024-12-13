import './App.css';
import { Nav } from './components/Nav';
import { Promo } from './components/Promo';
import { Intro1 } from './components/Intro1';
import { Intro2 } from './components/Intro2';
import {Intro3} from './components/Intro3';
import {Footer} from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <h1></h1>
    
      </header>
      <Nav/>    
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />



    </div>
    
  );
}

export default App;