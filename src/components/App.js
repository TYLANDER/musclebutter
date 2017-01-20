import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Media from 'react-bootstrap/lib/Media';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import '../App.css';



class App extends Component {
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
                <NavItem eventKey={1} href="#">Services</NavItem>
                <NavItem eventKey={2} href="#">Bio</NavItem>
                <NavItem eventKey={3} href="#">Contact</NavItem>
                <NavItem eventKey={4} href="#">Book Appointment</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
          <Jumbotron>
            <h1>Release your body's potential with Fascial Therapy</h1>
            <Button bsStyle="primary">Book Now</Button>
          </Jumbotron>
        <Grid>
          <Row>
            <Media>
              <Media.Left align="top">

              </Media.Left>
              <Media.Body>
                <Media.Heading>Unlock your body's potential with Muscle Butter</Media.Heading>
                <p>Our method brings clients to their best potential by integrating healthy movement practices, mindful and therapeutic exercises for recovery and prevention.</p>
              </Media.Body>
            </Media>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
