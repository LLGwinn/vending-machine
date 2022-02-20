import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Cookies from './Cookies';
import Cheetos from './Cheetos';
import Reeses from './Reeses';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <VendingMachine />
          </Route>
          <Route exact path="/cookies" >
            <Cookies />
          </Route>
          <Route exact path="/cheetos" >
            <Cheetos />
          </Route>
          <Route exact path="/reeses" >
            <Reeses />
          </Route>
        </Switch>
        
      </BrowserRouter>
  );
}

export default App;
