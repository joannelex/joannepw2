import './App.css';
import { TopNav } from './components/TopNav';
import avatar from './assets/avatar.svg';
import { DateTime } from './components/DateTime';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div className="App">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Text+Me+One&display=swap" rel="stylesheet"></link>
      </head>

      <div id="topnav">
        <TopNav/>
      </div>
      <DateTime className='date-time-container'/>

      <div className='main-page'> 
        <header className="App-header">
            <div id='greeting'>hey there (:</div>
            <div id='intro'>my name is Joanne</div>
            <div id='description'>welcome to my cozy space.</div>
        </header>
        <img src={ avatar } className="avatar" alt="avatar"/>
      </div>

      <div id='about-page'>
        <div className='section-header'> &lt; about &gt; </div>
        <About/>
        <div className='section-header'> &lt; /about &gt; </div>
      </div>

      <div id='projects-page'>
        <div className='section-header'> &lt; projects &gt; </div>
        <Projects/>
        <div className='section-header'> &lt; /projects &gt; </div>
      </div>

      <div id='artAndGallery-page'>
        <div className='section-header'> &lt; artAndGallery &gt; </div>
        <div className='section-header'> &lt; /artAndGallery &gt; </div>
      </div>

      <a href="#topnav">
        <button className='toTop'>
          <FontAwesomeIcon icon={faArrowUp} className="icons fa-xl"/>
        </button>
      </a>
      
    </div>
  );
}

export default App;
