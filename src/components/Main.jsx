var React = require('react');
import Navigation from './Navigation'
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../assets/mainroom.jpg'

var Main = React.createClass({
  render: function() {
  return (
    <div>
      <Navigation/>
            {this.props.children}
    </div>
  );
}
});

export default Main;
