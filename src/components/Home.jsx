import React from 'react';
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../assets/mainroom.jpg';



var Home = React.createClass({
  render() {
    return (
      <div>
        <div className="section hero">
         <div className="container">
           <div className="row">
             <div className="seven columns">
               <h1 className="hero-heading">Our website is launching soon. </h1>
                 <p className="subhead">In the meantime, we are still accepting bookings.</p>
               <a className="button button-primary" href="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external">Book Now</a>
             </div>
           </div>
         </div>
        </div>
      </div>
    )
  }
});

export default Home;
