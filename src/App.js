import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
