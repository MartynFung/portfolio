import * as React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="about" className="s-about target-section">
                    <h1>About Me</h1>
                    <div className="row about-content">
                        <div className="col-six tab-full left">
                            <h3>Hi there! I'm Martyn.</h3>
                            <p>I am a Full Stack developer based in Southern California with a passion for creating beautifully functional websites and solving problems.</p>
                            <p>I have experience using a variety of technologies including Angular, React, C#, .NET, SQL, and more.</p>
                            <p>Connect with me through my email or LinkedIn!</p>
                        </div>
                        <div className="col-six tab-full right">
                            <h3> </h3>
                            <img className="profile-img" src="images/profile.jpg" alt="Profile" width="280" height="280" />
                        </div>
                    </div> {/* end about-content */}
                    <div className="row about-content about-content--buttons">
                        <div className="col-six tab-full left">
                            <a href="https://www.dropbox.com/s/gequ1raao1f8v5v/Martyn%20Fung%20Resume.pdf?dl=0" className="btn btn--primary full-width">Download Resume</a>
                        </div>
                        <div className="col-six tab-full right">

                        </div>
                    </div> {/* end about-content buttons */}

                </section>
            </React.Fragment>
        );
    }
};
