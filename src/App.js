import './App.css';
import { TopNav } from './components/TopNav';
import bookGirl from './assets/bookGirl.png';
import { DateTime } from './components/DateTime';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ArtAndGallery } from './components/ArtAndGallery';
import { Contact } from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import joa from './assets/joa.png';
// import useLocalStorage from 'use-local-storage';
// import { Box } from '@chakra-ui/react';

function App() {
  // const [theme, setTheme] = useLocalStorage('light');
  // let isDark = (theme === 'dark') ? true : false;
  // const handleTheme = () => {
  //     const newTheme = (theme === 'light') ? 'dark' : 'light';
  //     isDark = (newTheme === 'dark') ? true : false;
  //     setTheme(newTheme);
  // };

  return (
    // <div className="App" data-theme={theme}>
    <div className="App" >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Nunito:wght@300;400&family=Text+Me+One&display=swap" rel="stylesheet"></link>
      </head>

      <div id="home">
        <TopNav/>
      </div>
      <DateTime className='date-time-container'/>
      {/* {isDark ? <button className='theme-button' onClick={handleTheme}><FontAwesomeIcon icon={faMoon} className="icons fa-xl"/></button> :
                        <button className='theme-button' onClick={handleTheme}><FontAwesomeIcon icon={faSun} className="icons fa-xl"/></button>} */}

      <div className='main-page'> 
        <header className="App-header">
            <div id='greeting'>Hey!</div>
            <div id='intro'>My name is <span id='name'>Joanne</span>,</div>
            <div id='intro'>and welcome to my creative box.</div>
        </header>
        <img src={bookGirl} className="avatar" alt="avatar"/> 
        {/* <img src={ isDark ? avatarDark : avatar} className="avatar" alt="avatar"/> */}
      </div>

      <div id='about'>
        <div className='section-header'> &lt;about&gt; </div>
        <About/>
        <div className='section-header'> &lt;/ about&gt; </div>
      </div>

      <div id='experience'>
        <div className='section-header'> &lt;experience&gt; </div>
        <Experience />
        <div className='section-header'> &lt;/ experience&gt; </div>
      </div>

      <div id='projects'>
        <div className='section-header'> &lt;projects&gt; </div>
        <Projects/>
        <div className='section-header'> &lt;/ projects&gt; </div>
      </div>

      <div id='artAndGallery'>
        <div className='section-header'> &lt;artAndGallery&gt; </div>
        <ArtAndGallery />
        <div className='section-header'> &lt;/ artAndGallery&gt; </div>
      </div>

      <div id='contactMe'>
        <div className='section-header'> &lt;contactMe&gt; </div>
        <Contact />
        <div className='section-header'> &lt;/ contactMe&gt; </div>
      </div>

      
      <div id='footer'>
        <img src={joa} id="joa" alt="joa" />
        made with &lt;3 by joannelee © 2023
      </div>

      <a href="#home">
        <button className='toTop'>
          <FontAwesomeIcon icon={faArrowUp} className="icons fa-xl"/>
        </button>
      </a>
      
    </div>
  );
}

export default App;
