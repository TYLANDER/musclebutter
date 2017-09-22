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
               <h2 className="hero-heading">Find your potential with manual therapy</h2>
               <a className="button button-primary" href="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external">Book Now</a>
             </div>
           </div>
         </div>
       </div>
       <div className="section definition">
         <div className="container">
           <div className="row">
             <h3 className="section-heading">Muscle Butter defined...</h3>
             <p className="section-description">A state of equilibrium between strength-stability and fluidity-flexibility.
               Today’s technology has helped us gain incredible intellect and new information, but our potential to connect with
               our body’s grace and innate awareness is waning.</p>
             <p className="section-description">At Muscle Butter, we assist in reclaiming areas of the body lost to postural habits, pain,
                tension, and trauma through massage and movement re-education.
                Our studio is a large bright space dedicated to one individual at a time.
                Services include manual therapy sessions, self care classes, and core integration training sessions.</p>
             </div>
           </div>
         </div>
         <div className="section caged-bodies">
           <div className="container">
             <div className="row">
                 <img className="u-full-width" src={require('../assets/muscle_butter_170210_153.jpg')} alt="Smiley Face"/>
             </div>
             <div className="row">
                 <h5 className="musclequote"><em>“The mysteries of the soul are revealed in the movements of the body”-Michelangelo</em></h5>
             </div>
           </div>
            <div className="container">
              <div className="row">
                <p className="section-description">Modern day demands can include hours of stagnation for a biological body that requires movement. These closed postures over time can diminish our body’s dimensions, make us shorter, flatter, narrower, and effectively compress joints, internal organs, and decrease circulation. Eventually, we become less flexible in both body and mind. It becomes easier to trip on a roadside curb, have a flare up, or perhaps uncontrollably spiral from an unexpected event.</p>
                <p className="section-description">Slowly, protective tension erodes our graceful and open orientation to gravity, limiting our enjoyment and expressions in life.</p>
                <p className="section-description">These postures become a “new normal” blueprint in the brain’s map. But how does one change this? One way to start is by learning how to relax the deep postural muscles to really feel your body’s orientation in space. From here, we can begin the steps toward change by retraining in an aligned, engaged way.</p>
              </div>
            </div>
          </div>
          <div className="section evidence-based-massage">
              <div className="container">
                <div className="row">
                    <img className="u-full-width" src={require('../assets/Massage_Hold_16x9.png')} alt="Smiley Face"/>
                </div>
                <div className="row">
                  <h3 className="section-heading">Evidence based massage...</h3>
                  <p className="section-description">Alex is aware of the many modalities the US massage therapy industry has offered over the past few decades and is frankly saddened by the inconsistency and negative experiences clients have reported nationwide. This is certainly not always the case, but ask yourself, how easy is it to find a great massage therapist? Lucky for you, we know some great MTs and want to help shift the industry toward standards of evidence based practices and techniques.</p>
                  <p className="section-description">We strive to give the most fact based, educated, and up to date techniques available in the field of massage therapy. We also strive to give our clients the best experience every single session.</p>
                 </div>
               </div>
           </div>
          <div className="section did-you-know">
            <div className="container">
              <div className="row">
                <h3 className="section-heading">Did you know?</h3>
                <p className="section-description">Quantitative research has shown that a series of massage therapy treatments consistently produces sizable reduction in depression in adult recipients. Also, a single massage therapy session can significantly reduce state anxiety in both adults and children. Multiple MT sessions significantly reduce trait anxiety in adults.</p>
                <p className="section-description">Given that anxiety and depression exacerbate many other specific health problems, massage therapy is a fantastic way to manage health and well being.</p>
              </div>
              <div className="row">
                <h3 className="section-heading">Low back pain?</h3>
                <p className="section-description">Massage is a fantastic start for intervening low back pain. It’s non-invasive natural approach can easily integrate without upsetting other bodily functions, and studies have shown massage to consistently alleviate symptoms. Massage is a passive therapy however, and while it helps symptoms, back pain often returns once consistent massage sessions stop.</p>
                <p className="section-description">Active therapies must be incorporated for the best outcome. Examples of active therapies: physical therapy, mindful based stress reduction, posture retraining, cognitive behavioral therapy, feldenkrais, iyengar yoga, and Alexander technique.</p>
              </div>
            </div>
          </div>
          <div className="section have-a-goal">
            <div className="container">
              <div className="row">
                <h3 className="section-heading">Have a goal</h3>
                <p className="section-description">Wondering why you can’t seem to land that dream marathon time? Why you’re not sleeping well? Why suddenly you’ve woken up with a searing foot pain? Why that effuse low back pain comes back every time you unload the dishwasher? Or why you’re so exhausted after working at the computer for such a short amount of time? Why sex hurts? Why that nagging neck and arm pain comes back every month?</p>
                <p className="section-description">Ultimately these are examples of why people travel the rabbit hole of therapies. Pain or discomfort can inspire a fickle attitude, and can easily take one off course from a plan in search for the next quick fix.  Alex prefers to collaborate and talk to coaches, doctors, or therapist’s you’re already working with to keep you on track and to get a full scope of why you think manual therapy or core integration training could work for you.</p>
                <p className="section-description">Remember why you started and what you set out to achieve with your practitioner(s).  Alex works hard to help you achieve these goals which is why she does not work alone.  If necessary, she often refers out to sports medicine doctors, doctors of physical therapy, other bodyworkers, specialized pilates instructors, strength and conditioning specialists, cognitive behavioral therapists, and pelvic floor specialists. </p>
              </div>
              <div className="row">
                <h3 className="section-heading">Have a question?</h3>
                <p className="section-description">Contacting me by email is the best way to start a conversation. From there, we schedule a call if necessary. I look forward to hearing from you! </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
});

export default Home;
