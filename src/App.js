import Hero from "./MyCompoments/Hero/Hero";
import About from "./MyCompoments/About/About";
import Navbar from "./MyCompoments/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Service from "./MyCompoments/Services/Service";
import Contact from "./MyCompoments/Contact/Contact";
import Portfolio from "./MyCompoments/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
