import * as React from 'react';

export default class Projects extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="projects" className="s-projects target-section">
                    <div className="row projects-content">
                        <div className="col-full text-center">
                            <h1>Projects</h1>
                        </div>
                    </div>
                    <div className="row projects-content">
                        <div className="col-six tab-full mob-full">
                            <div className="card">
                                <a target="_blank" href="http://eleveight.co/">
                                    <div className="card-img" style={{ backgroundImage: `url(images/portfolio/eleveight.jpg)` }}></div>
                                </a>
                                <div className="card-content">
                                    <div className="card-tags">
                                        <div className="card-tag text-sm">Work</div>
                                        <div className="card-tag text-sm">|</div>
                                        <div className="card-tag text-sm">C#</div>
                                        <div className="card-tag text-sm">.NET</div>
                                        <div className="card-tag text-sm">SQL</div>
                                        <div className="card-tag text-sm">React</div>
                                    </div>
                                    <h4>Eleveight</h4>
                                    <p>Created an MVP web application for Eleveight utilizing C#, .NET, Web API, React.JS, HTML, CSS, Bootstrap</p>
                                    {/* <a rel="noopener noreferrer" target="_blank" href="https://github.com/MartynFung"><strong>View Code</strong></a> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-six tab-full mob-full">
                            <div className="card">
                                <div className="card-img" style={{ backgroundImage: `url(images/portfolio/portfolioPage.jpg)` }}></div>
                                <div className="card-content">
                                    <div className="card-tags">
                                        <div className="card-tag text-sm">Personal</div>
                                        <div className="card-tag text-sm">|</div>
                                        <div className="card-tag text-sm">React</div>
                                        <div className="card-tag text-sm">JavaScript</div>
                                    </div>
                                    <h4>Portfolio Page</h4>
                                    <p>Designed a responsive personal portfolio page using React.js, JavaScript, jQuery, HTML, CSS.</p>
                                    {/* <a rel="noopener noreferrer" target="_blank" href="https://github.com/MartynFung"><strong>View Code</strong></a> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-six tab-full mob-full">
                            <div className="card">
                                <div className="card-img" style={{ backgroundImage: `url(images/portfolio/space.jpg)` }}></div>
                                <div className="card-content">
                                    <div className="card-tags">
                                        <div className="card-tag text-sm">Personal</div>
                                        <div className="card-tag text-sm">|</div>
                                        <div className="card-tag text-sm">C#</div>
                                        <div className="card-tag text-sm">.NET Core</div>
                                        <div className="card-tag text-sm">React</div>
                                    </div>
                                    <h4>WeatherApp</h4>
                                    <p>Minimal React app that pulls weather info from OpenWeatherMap API</p>
                                    {/* <a rel="noopener noreferrer" target="_blank" href="https://github.com/MartynFung"><strong>View Code</strong></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> {/* end projects */}
            </React.Fragment >
        )
    }
}
