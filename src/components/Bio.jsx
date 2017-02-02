import React from 'react';
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../styles/bio.css';
import '../assets/Alex_profile_160705.png';

var Bio = React.createClass({
    render() {
      return (
        <div>
        <div className="container">
          <div className="section">
            <div className="row alexheader">
              <div className="one-half column">
                  <img className="u-max-full-width" src={require('../assets/Alex_profile_160705.png')} alt="Smiley Face"/>
              </div>
              <div className="one-half column">
                <h4 id="musclequote">"It's not the load that breaks you down, it's the way you carry it." -Lou Holtz</h4>
              </div>
            </div>
            </div>
            <div className="section" style={{height: "5rem"}}/>
            <div className="section">
            <div className="row">
              <h3 className="section-heading bioheader">About Alex Schmidt-Owner and Head Practitioner</h3>
              <p className="section-description">Alex resides in San Francisco and has been a clinical bodywork practicioner for the past 10 years. Her dedication to technique, the study of the human body and its fascial network, and faith in its ability to heal make Her one of the most sought after manual therapists in SF. Her integration with breath, movement, and core function are key features that quickly move her clients from the acute state to the healing phase</p>
              <p className="section-description">Alex has played a key role in the healing process for clients experienceing sciatica, plantar fasciitis, migarnes, sports-related injuries, arthritis, nerve entrapment, repetitive strain injuries, spinal pain, joint pain, posture related pain, surgical recovery, and trauma recovery. Her down-to-earth educational sessions are labs for self-recovery, accecptance, and require a desire for pisitive change.</p>
              <p className="section-description">Outside of the office she is connecting with San Francisco's small business community, massage therapy students, running trails, practicing yoga, and weight training.</p>
              <p className="section-description"> Alex is a member of the Fascia Research Congress and the Academy of Integrative Pain Management. She is certified through the California Massage Therapy Council, a Stott Pilates Instructor, and a CHEK exercise coach.</p>
              <h3 className="section-heading">Muscle Butter...</h3>
              <p className="section-description">is a clinical bodywork and movement sudio dedicated to the highest quality massage technique for natural pain mangement and recovery. We offer manual therapy services, self car learning services, and corrective exercise services.</p>
              <p className="section-description">Our space has two treatment rooms: one for bodywork and massage, and another dedicated to health movement and corrective exercise.</p>
            </div>
          </div>
        </div>
      </div>
      )
    }
});


export default Bio;
