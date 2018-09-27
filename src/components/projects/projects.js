import * as React from 'react';

export default class Projects extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="projects" className="s-projects target-section">
                    <div className="row projects-content">
                        <div className="col-full text-center">
                            <h1>Projects</h1>
                            <p>In Progress...</p>
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
                                        <div className="card-tag text-sm">React.js</div>
                                    </div>
                                    <h4>Eleveight</h4>
                                    <p>Created an MVP web application for Eleveight utilizing C#, .NET, Web API, React.JS, HTML, CSS, Bootstrap</p>
                                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/MartynFung/work_samples"><strong>View Code</strong></a>
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
                                        <div className="card-tag text-sm">React.js</div>
                                        <div className="card-tag text-sm">JavaScript</div>
                                        <div className="card-tag text-sm">jQuery</div>
                                        <div className="card-tag text-sm">HTML</div>
                                        <div className="card-tag text-sm">CSS</div>
                                    </div>
                                    <h4>Portfolio Page</h4>
                                    <p>Designed a responsive personal portfolio page using React.js, JavaScript, jQuery, HTML, CSS. Currently in progress.</p>
                                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/MartynFung/portfolio"><strong>View Code</strong></a>
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
                                        <div className="card-tag text-sm">.NET</div>
                                        <div className="card-tag text-sm">SQL</div>
                                        <div className="card-tag text-sm">React.js</div>
                                    </div>
                                    <h4>Rentfinder</h4>
                                    <p>Collaboration tool to find the best place to live. Built a webscraper to pull housing details from Zillow.</p>
                                    <a rel="noopener noreferrer" target="_blank" href=""><strong>In Progress</strong></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> {/* end projects */}
            </React.Fragment >
        )
    }
}