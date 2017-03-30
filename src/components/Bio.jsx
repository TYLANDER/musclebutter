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
          <div className="section bio">
            <div className="container ">
            <div className="row alexheader">
              <div className="six columns">
                <img className="u-full-width shadow" src={require('../assets/alex_profile_1x1_170210_005.png')} alt="Smiley Face"/>
              </div>
              <div className="six columns">
                <h5 className="musclequote"><em>"It's not the load that breaks you down, it's the way you carry it." -Lou Holtz</em></h5>
              </div>
            </div>
            </div>
            <div className="section">
              <div className="container">
                <div className="row">
                  <h3 className="section-heading">Head Practitioner Alex Schmidt</h3>
                  <p className="section-description">lives in San Francisco, CA and has been practicing clinical bodywork for the last 10
                    years. Her dedication to technique, the study of the human body and its fascial network, and
                    faith in its ability to heal make her one of the most sought after manual therapists in SF.
                    Her integration with breath, movement, and core function are key features that quickly move her
                    clients from acute pain states to the healing phase. </p>
                  <p className="section-description">Alex has played a key role in the healing process for clients experiencing sciatica, plantar
                    fasciitis, migraines, sports related injuries, arthritis, nerve entrapment, repetitive strain injuries,
                    spinal pain, joint pain, posture related pain, surgical recovery, and trauma recovery.
                    Her down-to-earth and educational sessions are labs for self discovery, acceptance, and require
                    a desire for positive change. </p>
                  <p className="section-description">Outside of the office she’s connecting with San Francisco’s small business community,
                    connecting with massage therapy students, running and trekking trails, practicing yoga, and
                    weight training.</p>
                  <p className="section-description">Alex is a member of the Fascia Research Congress and the Academy of Integrative Pain
                    Management. She is certified through the California Massage Therapy Council, a Stott Pilates
                    instructor, and a CHEK exercise coach.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
    }
});


export default Bio;
