import React from 'react';
import Home from './home/_home';
import HomePicture from './home_picture/_home-picture';
import './App.css';
import HomeAbout from './home_about/_home_about';
import HomeSkills from './home_skills/_home_skills';
import HomeProjects from './home_projects/_home_projects';
import HomeContact from './home_contact/_home_contact';

function App() {
  return (
    <div className="app">
        <Home />
        <HomePicture />
        <HomeAbout />
        <HomeSkills />
        <HomeProjects />
        <HomeContact  />
    </div>
  );
}

export default App;
