import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import './App.css';
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <Router>
    <div className="App"
    style={{
      background:darkMode? '#1C1A1A':'#DCDCDC',
      color:darkMode? 'white': ''
    }}
    >
      
      <Navbar/>
      <Switch>
          <Route exact path="/skills">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Intro />
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
          </Route>
        </Switch>

      
     
      
    </div>
    </Router>
  );
}

export default App;
