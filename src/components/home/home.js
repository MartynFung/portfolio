import * as React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/yosemite.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
                    <div className="overlay" />
                    <div id="particles-js"></div>
                    <div className="shadow-overlay" />
                    <div className="home-content">
                        <div className="home-content__main">
                            <h1>Martyn <span className="accent-color">Fung</span></h1>
                        </div>
                        <div className="home-content__subtitle">
                            <h3>Full Stack Web Developer</h3>
                            <a href="#about" className="smoothscroll fa fa-angle-down"> </a>
                        </div>
                    </div>

                    <ul className="intro-social">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/martynfung"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="mailto:mknfung@gmail.com"> <i className="fa fa-envelope"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/MartynFung"> <i className="fa fa-github"></i></a></li>
                    </ul>

                </section>
            </React.Fragment >
        );
    }
};
