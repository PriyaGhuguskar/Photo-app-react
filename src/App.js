import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbarcompo from './Component/Navbarcompo';
import Cardcomponent from './Component/Cardcomponent';
import About from './Component/About';
import Contact from './Component/Contact';
import Bigphoto from './Component/Bigphoto';

function App() {
  return (
    <BrowserRouter>
      <Navbarcompo />
      <Switch>
        <Route exact path="/">
          <Cardcomponent />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/photos/:id">
          <Bigphoto />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}


export default App;
