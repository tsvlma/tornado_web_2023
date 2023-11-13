
import './App.css';
import Footer from './Footer';
import Navbar from './navbar';
import MainContent from './MainContent';





function App (){
  return(
    <div className='App'>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App