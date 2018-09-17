import React from 'react'
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';

var createReactClass = require('create-react-class');

var Contact = createReactClass({
  render() {
    return (<div>
      <div className="section" style={{
          height: "80px"
        }}/>
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="one column"></div>
          <div className="four columns connect">
            <p className="tableheader">Location</p>
            <h4>862 Folsom St.</h4>
            <h4>San Francisco, CA</h4>
            <h4>94107</h4>
            <br></br>
            <p className="tableheader">General Inquiries</p>
            <h4>
              <a href="mailto:alex@themusclebutter.com">Alex@themusclebutter.com</a>
            </h4>
            <br></br>
            <p className="tableheader">Follow Us</p>
            <h4>
              <a href="https://twitter.com/MuscleButter">@themusclebutter</a>
            </h4>
          </div>
          <div className="one column"></div>
          <div className="five columns"></div>
          <div className="one column"></div>
        </div>
      </div>
    </div>)
  }
});

export default Contact;
