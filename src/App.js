import './App.css';
import { TopNav } from './components/TopNav';
import avatar from './assets/avatar.svg';
import avatarDark from './assets/avatar-headphone-dark.svg';
import { DateTime } from './components/DateTime';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ArtAndGallery } from './components/ArtAndGallery';
import { Contact } from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from 'use-local-storage';
// import { Box } from '@chakra-ui/react';

function App() {
  const [theme, setTheme] = useLocalStorage('light');
  let isDark = (theme === 'dark') ? true : false;
  const handleTheme = () => {
      const newTheme = (theme === 'light') ? 'dark' : 'light';
      isDark = (newTheme === 'dark') ? true : false;
      setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Nunito:wght@300;400&family=Text+Me+One&display=swap" rel="stylesheet"></link>
      </head>

      <div id="home">
        <TopNav/>
      </div>
      <DateTime className='date-time-container'/>
      {isDark ? <button className='theme-button' onClick={handleTheme}><FontAwesomeIcon icon={faMoon} className="icons fa-xl"/></button> :
                        <button className='theme-button' onClick={handleTheme}><FontAwesomeIcon icon={faSun} className="icons fa-xl"/></button>}

      <div className='main-page'> 
        <header className="App-header">
            <div id='greeting'>hey there (:</div>
            <div id='intro'>my name is Joanne,</div>
            <div id='description'>welcome to my cozy space.</div>
        </header>
        <img src={ isDark ? avatarDark : avatar} className="avatar" alt="avatar"/>
      </div>

      {/* <Box 
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      width={{base: "20px", md: "100px", lg: "200px"}}
      backgroundColor={{base: "pink", md: "red", lg: "blue"}}
      >Hello joane</Box> */}

      <div id='about'>
        <div className='section-header'> &lt;about&gt; </div>
        <About/>
        <div className='section-header'> &lt;/ about&gt; </div>
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
