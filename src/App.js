import './App.scss';
import Welcome from './views/welcome/welcome';
import {Router} from "@reach/router"
import Motivation from './views/motivation/motivation';
import Qualities from './views/welcome/qualities/qualities';
import Background from './views/background/background';

function App() {
  return (
    <div className="App">
      <Router>


        <Welcome default path="/"/>
        <Motivation path="/motivation"/>
        <Background path="/background"/>
        <Qualities path="/qualities"/>


      </Router>
      
    </div>
  );
}

export default App;
