import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Home from './components/Home';
import Main from './components/Main';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Services from './components/Services';




// Load skeleton?



ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external#services" component={Services}/>
        <Route path="bio" component={Bio} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>,
  document.getElementById('root')
);
