import React from 'react';
import './Nom.css';
import NomLogo from '../../assets/nomLogo.svg';
import NomChatBox from '../../assets/chatbox.svg';
import UserFlows from '../../assets/userFlows.svg';
import TechDetails from '../../assets/techDetails.png';
import Nommers from '../../assets/nommers.svg';
import NommersSample from '../../assets/nommersSample.svg';
import NomScreens from '../../assets/nomScreens.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Nom() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nom-container">
      <div className="back-button-container">
        <Link to="/myCozySpace">
          <button className="back-button"><FontAwesomeIcon icon={faArrowLeft} className="icons fa-xl"/></button>
        </Link>
      </div>

      <div className="nom-header-section">
        <div className='nom-awards-container'>
          <div className="nom-awards">
            <p>🏆 1st place winner</p>
            <p>🥈 2nd place design</p>
          </div>
        </div>
        
        <div className='nom-header-content'>
          <div>
            <img src={ NomLogo } id="nom-logo-image" alt="nom logo"/>
          </div>
          <div className="nom-project-info">
            <h1>nom</h1>
            <p>Can’t decide where to eat? Leave it to nom.</p>
          </div>
        </div>
      </div>

      <div className="nom-details-section">
        <div className="nom-detail-row">
          <p><strong>Team:</strong> 1 Designer, 3 Engineers</p>
          <p><strong>My Role:</strong> Frontend developer + Visual design</p>
        </div>

        <div className="nom-detail-row">
          <p><strong>Hackathon:</strong> Stormhacks 2024</p>
          <p><strong>Tech:</strong> NextJS, React, Express, Firebase, bland.ai, Figma</p>
        </div>
      </div>

      <div className="nom-description-section">
        <h2 className="nom-section-title">tl;dr</h2>
        <p>
          Based on location, dietary restrictions, and preferences, nom curates 3 restaurants that are best suited for your group. On the day of the outing, your group votes on their favorite in the app, removing the need for endless back-and-forth texting. nom handles the rest, automatically booking a reservation at the winning restaurant for your desired time.
        </p>
      </div>

      {/* Why Section */}
      <div className="nom-why-section">
        <h2 className="nom-section-title">why?</h2>
        <div className='nom-why-text-section'>
          <p>
            Our group (okay, by all, I mean the 3/4 of us) were all co-workers at this time! When the clock hits 11:30am, we would all get a ping on Slack:
          </p>
          <div className="nom-chat-box">
            <img src={ NomChatBox } id="nom-chat-img" alt="chatbox"/>
          </div>
          <p>
            I’m sure this isn’t just in our group chat. This is why we built nom—to avoid the hassle of making decisions for the group (we already need to do that at work), but instead, you can focus on the social part: nom nom yap yap.
          </p>
        </div>
      </div>

      {/* How Section */}
      <div className="nom-how-section">
        <h2 className="nom-section-title">how?</h2>
        <div className='nom-how-text-section'>
          <h3>pt1. ideation</h3>
          <p>When I promote myself to my hackathon teams, I tell them that I carry multiple hats. I first put my product hat on.</p>
          <p>Our designer and I first started with user stories to see what screens we need + what our MVP should be.</p>
        </div>
      </div>
      <div className='nom-user-flow-container'>
        <img src={ UserFlows } id="nom-user-flows" alt="user flows"/>
        <p>Nice! now onto the technical details</p>
        <img src={ TechDetails } id="nom-tech-details" alt="technical details"/>
      </div>
      <div className='nom-text-container'>
        <p>And now it was time to cook.</p>
      </div>
      
      <div className='nom-text-container'>
        <h3>pt2. visuals + UI/UX</h3>
        <p>Now time to switch out to my design hat (: While our designer got started with lo-fi design of our main screens, 
          I focused on the visuals of the brand: colour and mascots. Let me introduce you to our nommers!</p>
      </div>
      <img src={ Nommers } id="nom-nommers" alt="nommers"/>
      <div className='nom-text-container'>
        <p>These adorable nommers would be our primary way of visually delivering the context of our screens (and an eye-candy, of course).  
          Uniqueness of these simple creatures come from their expressions and vibrant colours—emphasizing our diverse audience 
          and their tastes. Don’t they look so nommable?</p>
      </div>
      <img src={ NommersSample } id="nom-nommers-sample" alt="nommers samples"/>
      <div className='nom-text-container'>
        <p>Check out our design in our <a href="https://www.figma.com/design/c9LaWuythcQqkcbgu8RfcS/nom---Design-Documents?node-id=0-1&t=IiX4P6Yhz7f3ffIX-1">Figma</a>!</p>
      </div>

      <div className='nom-text-container'>
        <h3>pt3. Implementation</h3>
        <p>And now onto the keyboard. I helped with the front-end implementation for the onboarding screens and maps integration, 
          while the other engineers cooked the backend. </p>
        <p>We made nom as a Progressive Web App (PWA) that was built with NextJS and React on the front end, and Express and 
          Firebase on the back end. We leveraged multiple APIs, including Google Maps and Google Places in order to provide 
          the best recommendations for users. Then, we automated the restaurant reservation booking process by using bland.ai.</p>
      </div>
      <img src={ NomScreens } id="nom-screens" alt="nom screens"/>

      {/* Next Steps */}
      <div className="nom-next-section">
        <h2 className="nom-section-title">next steps?</h2>
        <div className='nom-next-text-section'>
          <p><strong>Even More Personalization</strong>: nom could learn individual user preferences beyond dietary restrictions. 
            Does someone love spicy food? Another person hate seafood? We can factor that in (:</p>
          <p><strong>Group Payment Integration</strong>: Splitting the bill can be another source of friction with group outings.
             nom could scan the receipt and integrate with payment apps, allowing users to split the bill easily.</p>
          <p><strong>Restaurant Partnerships</strong>: nom could partner with restaurants for exclusive deals or priority reservations through the app.</p>
        </div>
      </div>
    </div>
  );
}

export default Nom;

