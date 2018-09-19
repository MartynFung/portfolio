import * as React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="s-header">
                    <div className="header-logo" style={{ color: "white" }}>
                        MF
                        {/* <a className="site-logo" href="index.html"><img height="50" src="images/MF.png" alt="Homepage" /></a> */}
                    </div>
                    <nav className="header-nav-wrap">
                        <ul className="header-nav">
                            <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
                            <li><a className="smoothscroll" href="#about" title="about">About</a></li>
                            <li><a className="smoothscroll" href="#resume" title="resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#projects" title="works">Projects</a></li>
                        </ul>
                    </nav>
                    <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
                </header >
            </React.Fragment>
        );
    }
};