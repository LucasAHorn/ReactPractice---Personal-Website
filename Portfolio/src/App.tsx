import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import "./App.css";

function App() {

  return (<>
    <Header PageSectionLocations="give an array here from the other parts of the website" />
    <Landing />
    <AboutMe />
    <Portfolio />
    <ContactMe />  
  </>);
}
export default App;