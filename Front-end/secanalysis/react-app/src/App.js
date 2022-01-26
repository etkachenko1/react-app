import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import About from "./pages/About"
import Results from "./pages/Results"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SurveysDone from './components/SurveysDone';
function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/quiz" exact component={Quiz}/>
           <Route path="/about" exact component={About}/>
           <Route path="/test" exact component={SurveysDone}/>
           <Route path="/results" exact component={Results}/>
         </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
