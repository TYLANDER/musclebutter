var React = require('react');
import Navigation from './Navigation'
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../assets/mainroom.jpg';

var Main = React.createClass({
  render: function() {
  return (
    <div>
      <div>
        <Navigation/>
              {this.props.children}
      </div>
      <div className="row">
        <div className="container">
          <div id="hline">
            <p id="footer">©Musclebutter 2017. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
});

export default Main;
