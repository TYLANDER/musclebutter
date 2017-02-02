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
               <h1 className="hero-heading">Release your bodys potential with Fascial Therapy</h1>
                 <p className="subhead">Our method brings clients to their best potential by integrating healthy movement practices, mindful and therapeutic exercises for recovery and prevention.</p>
               <a className="button button-primary" href="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external">Book Now</a>
             </div>
           </div>
         </div>
        </div>
        <div className="section cages">
          <div className="container">
                <h3 className="section-heading">Your body lives in cages</h3>
                <p className="section-description">Shoes, cars, computers, chairs, beds -the inventions of modern man are creature comforts that hinder our natural movement patterns. We are the result of hundereds of thousands of years of evolution. And that time has gotten us to a period where we barely use our bodies the way they were intended. We sit at desks, bash away on computers, and drive everywhere we need to go. Our daily actions imprision our bodies and limit their natual range of motion. Our bodies are responsive to input. Over time they will form to the shapes they encounter on a daily basis. If you don’t improve the way you move, you may lose proper motion forever. Free yourself from your cages.</p>
            </div>
          </div>
        <div className="section mission">
          <div className="container">
            <h3 className="section-heading">Musclebutter...</h3>
            <p className="section-description">brings clients to their best potential by integrating healthy movement practices, mindful and therapeutic exercises for recovery and prevention. Update mission statement.</p>
            <div className="row">
              <div className="twelve columns">
                <div className="mainroom"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section natural-movement">
          <div className="container">
            <h3 className="section-heading">Natural Movement & Posture Training</h3>
            <p className="section-description">Keytar McSweeney's Williamsburg, readymade leggings try-hard 90's street art letterpress hoodie occupy Wes Anderson Banksy. Asymmetrical viral letterpress, McSweeneys seitan 3 wolf moon drinking vinegar sartorial pour-over messenger bag photo booth umami next level craft beer. Tote bag 8-bit flannel dreamcatcher photo booth. Tofu photo booth American Apparel, cliche brunch swag freegan lomo retro cray Vice.</p>
          </div>
        </div>
        <div className="section the-fascia">
          <div className="container">
            <h3 className="section-heading">The Fascia</h3>
            <p className="section-description">Fascia is the biological fabric that holds us together, the connective tissue network. You are about 70 trillion cells – neurons, muscle cells, epithelia – all humming in relative harmony; fascia is the 3-D spider web of fibrous, gluey, and wet proteins that binds them all together in their proper placement.

              Our biomechanical regulatory system is highly complex and under-studied – though new research is filling in the gap. Understanding fascia is essential to the dance between stability and movement – crucial in high performance, central in recovery from injury and disability, and ever-present in our daily life from our embryological beginnings to the last breath we take. BE SURE TO ADD HYPERLINKS TO THIS.</p>
          </div>
        </div>
        <div className="section book-today">
          <div className="container">
              <h4>Book your appointment today!</h4>
              <a className="button button-primary" href="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external">Book Now</a>
          </div>
        </div>
      </div>
    )
  }
});

export default Home;
