import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LandingPage from './Pages/LandingPage/LandingPage.js';
import ResultPage from './Pages/ResultPage/ResultPage.js';
import 'bootstrap/scss/bootstrap.scss';

function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/category/:value" component={ResultPage} />
          <Route exact path="/search/:search" component={ResultPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
