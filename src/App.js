import './App.css';

import {BrowserRouter as Router,
    Route,
  Redirect,
Switch} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation.js'
import Users from './users/pages/Users.js';
import Ejercicio2 from './shared/components/Navigation/NavLinks/Ejercicio2';
import Ejercicio4 from './shared/components/Navigation/NavLinks/Ejercicio4';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
      <Route path="/Ejercicio2">
        <Ejercicio2 />
      </Route>

      <Route path="/Ejercicio4">
        <Ejercicio4 />
      </Route>

      <Route path="/places/new" exact>
        <h1>Places</h1>
      </Route>

      <Redirect to ="/" />

      </Switch>
      </main>
    </Router>

  );
 // document.getElementById("myImg").src = "https://sites.google.com/site/fernvalleybonsai/";
}

export default App;
