import React from 'react';
import '../App.css';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import '../styles/bio.css';
import '../assets/Alex_profile_160705.png';
var createReactClass = require('create-react-class');

var Bio = createReactClass({
  render() {
    return (<div>
      <div className="section bio">
        <div className="container ">
          <div className="row alexheader">
            <div className="six columns">
              <img className="u-full-width shadow" src={require('../assets/alex_profile_1x1_170210_005.png')} alt="Smiley Face"/>
            </div>
            <div className="six columns">
              <h5 className="musclequote">
                <em>"It's not the load that breaks you down, it's the way you carry it." -Lou Holtz</em>
              </h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <h3 className="section-heading">Head Practitioner Alex Schmidt</h3>
              <p className="section-description">Alex lives in San Francisco, CA and has been practicing clinical bodywork for the past 10 years. Her dedication to technique, the study of the human body, and faith in its ability to heal make her one of the most sought after manual therapists in SF. Her integration with breath, movement, and core function are what she relies on to move clients from acute pain to the healing phase. Alex’s interest in bodywork began after receiving tremendous help from a Rolfer at age 17 after a back injury. In the two years that followed, she apprenticed with Rolfers, sports massage therapists, among other clinical massage therapists in the southeast Michigan (including Irene Gauthier) and completed her certification through Irene’s Myomassology Institute in 2008. Alex continued her studies learning dynamic sports massage applications, myofascial trigger point therapy, myofascial release, medical massage, and structural integration. After working as a medical massage therapist for 2 years, she began to learn the relationship of how the brain organizes and moves in response to pain and ever changing emotional states. In 2013, after finishing her studies as a Stott Pilates mat and reformer instructor, Alex moved to San Francisco in hope of finding more like-minded practitioners. She later became a Chek exercise coach and is currently finishing her strength and conditioning coach certification. Alex incorporates the teachings of Katy Bowman and Mary Bond into her bodywork and core integration sessions.
              </p>
              <p className="section-description">Alex has played a key role in the healing process for clients experiencing sciatica, plantar fasciitis, migraines, low back pain, scoliosis related tension and pain, sports related injuries, hip pain, nerve entrapment, repetitive strain injuries, spinal pain, shoulder pain, posture related pain, surgical recovery, and trauma recovery. Her down-to-earth and educational sessions are labs for self discovery, self-acceptance, and require a desire for change.
              </p>
              <p className="section-description">Outside the office Alex is always moving and discovering new ways to connect with the body and her community. After 4 years of doing Crossfit, Alex took those principles and seeks variability through olympic weightlifting, running local races, core integration work, yoga, and dance</p>
              <p className="section-description">Alex is a member of the Fascia Research Congress and the Academy of Integrative Pain Management. She is certified through the California Massage Therapy Council, a Stott Pilates mat and reformer instructor, and a CHEK exercise coach.</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
});

export default Bio;
