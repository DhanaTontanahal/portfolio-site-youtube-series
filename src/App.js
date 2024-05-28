import Hero from "./MyCompoments/Hero/Hero";
import About from "./MyCompoments/About/About";
import Navbar from "./MyCompoments/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
