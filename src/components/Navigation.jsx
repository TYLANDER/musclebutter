var React = require('react');
var {Link} = require('react-router');
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../assets/mainroom.jpg';


class Navigation extends React.Component {
  render() {
  return (
    <div>
      <div className="App">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Muscle Butter</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
                <Link to='/services' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Services</Link>
                <Link to='/bio' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Bio</Link>
                <Link to='/contact' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Contact</Link>
              <a href="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external">Book Now</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
    );
  }
};

export default Navigation;
