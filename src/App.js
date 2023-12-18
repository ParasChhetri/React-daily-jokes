import { NavBar } from './components/Header_section/NavBar';
import { FooterComp } from './components/footer_section/FooterComp';
import { JokesConatainer } from './components/main_section/jokes_conatiner/JokesContainer';
import './index.scss';

function App() {
  
  return (
    <div className='App'>
      <NavBar />
      <JokesConatainer />
      <FooterComp />
    </div>
  );
}

export default App;
