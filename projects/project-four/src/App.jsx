import Header from "./components/Header"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import LifestyleCard from "./components/LifestyleCard"
import Technology from "./components/technology"


function App() {


  return (
    <div className="flex ">
      <SideBar />
      <div className="w-[70%]">
      
        <Header />
        <Main  />
        
        <Footer />
      </div>
    </div>
  )
}

export default App
