import React from 'react';
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../assets/mainroom.jpg';
import '../assets/fascia_muscle_butter_170210_136.jpg'



var Home = React.createClass({
  render() {
    return (
    <div>
      <div className="section hero">
         <div className="container">
           <div className="row">
             <div className="seven columns">
               <h2 className="hero-heading">Find your potential with Fascial Therapy</h2>
               <a className="button button-primary" href="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external">Book Now</a>
             </div>
           </div>
         </div>
       </div>
       <div className="section definition">
         <div className="container">
           <div className="row">
             <h3 className="section-heading">Muscle Butter</h3>
             <p className="section-description">...is a state of equilibrium between strength-stability and fluidity-flexibility. A healthy, self regulated
               myofascial system. In this state your body is able to do most things you want it to do without
               pain or restriction-within reason and enough practice. Modern day demands have helped us
               gain incredible technology but loose touch with our body’s innate abilities and potential. We
               named our business Muscle Butter marking an ideal state of being for ourselves and others.</p>
             <p className="section-description">We are a clinical bodywork and movement studio dedicated to the highest quality manual
               techniques for myofascial pain management and recovery. We offer manual therapy services,
               self care classes, and corrective exercise training.
               Our space has two treatment rooms: one dedicated to manual therapies and another to creative
               movement and corrective exercise.</p>
             </div>
           </div>
           <div className="container">
             <div className="row">
               <div className="twelve columns">
                 <img className="u-full-width" src={require('../assets/Alex_Therapy_Table_16x9.png')} alt="Smiley Face"/>
               </div>
             </div>
           </div>
         </div>
          <div className="section caged-bodies">
            <div className="container">
              <div className="row">
                <h3 className="section-heading">Caged Bodies</h3>
                <p className="section-description">Modern day demands can include hours of stagnation for a biological body that requires
                   movement. Tissue distortions from these demands include: adhesions, scar tissue from trauma,
                   shortnesses to muscle and fascia, and tissue patterns shaped by the psychology in the body
                   (posture).</p>
                <p className="section-description">We cannot access our body’s fully with these patterns. Wondering why you can’t seem to land
                   that dream marathon time? Why you’re not sleeping well? Why you haven’t budged past your
                   weightlifting goals in months? Or why you’re so exhausted after working at the computer for
                   such a short amount of time? Or why that nagging neck pain comes back every month?
                   Manual and myofascial therapy is a great intervention for these dysfunctional patterns.
                   Bodywork opens the possibility to gain mobility, awareness, and improved function. Some
                   benefits to these possibilities: more sustainable in-the-moment choices about posture and
                   comfort, better coordination, better mobility, and overall increased well-being. This is not the end
                   of the journey however. We educate healthy movement practices, mindful movement, and offer
                   corrective exercises within our scope of practice. We also refer to a wide ranging network of
                   doctors, therapists, and coaches in the physical arts for continued improvement. </p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <img className="u-full-width" src={require('../assets/movement_therapy_16x9.png')} alt="Smiley Face"/>
                </div>
              </div>
          </div>
            <div className="section the-fascia">
              <div className="container">
                <div className="row">
                  <h3 className="section-heading">The Fascia</h3>
                  <p className="section-description"><em>“Understanding fascia is essential to the dance between stability and movement – crucial in high
                     performance, central in recovery from injury and disability, and ever-present in our daily life from
                     our embryological beginnings to the last breath we take.” —Tom Myers</em></p>
                   <p className="section-description">You may have heard this term thrown around lately, but what does it mean? Fascia is the
                     membranous biological fabric that holds us together. Fascia surrounds connects and invests
                     every bone, muscle, organ, vessel, and nerve in the body. It’s gelatinous, wet, fibrous—it ranges
                     from loose to dense from structured to chaotic. This is the absolute broadest definition of this
                     highly complex system.</p>
                 </div>
               </div>
               <div className="container">
                 <div className="row">
                   <img className="u-full-width" src={require('../assets/Massage_Hold_16x9.png')} alt="Smiley Face"/>
                 </div>
               </div>
             </div>
          <div className="section myofascia">
            <div className="container">
              <div className="row">
                <h3 className="section-heading">Myofascia</h3>
                <p className="section-description">Refers to the connective tissues relating to the skeletal muscles. This includes their internal
                    fascial structures, external coverings, septa, and connections.</p>
                <p className="section-description">All manual work at our studio is focused on the myofascial network.</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
});

export default Home;
