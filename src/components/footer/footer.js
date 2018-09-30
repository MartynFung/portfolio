import * as React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                < footer >
                    <div className="row">
                        <div className="col-full">
                            <ul className="footer-social">
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/martynfung">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a></li>
                                <li><a href="mailto:mknfung@gmail.com">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span>Email</span>
                                </a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/MartynFung">
                                    <i className="fa fa-github" aria-hidden="true" />
                                    <span>GitHub</span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-bottom">
                        <div className="col-twelve">
                            <div className="copyright">
                                <span>Built by yours truly with React.js</span>
                            </div>
                            <div className="go-top">
                                <a className="smoothscroll" title="Back to Top" href="#top"> <i className="fa fa-arrow-up" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div> {/* end footer-bottom */}
                </footer >
            </React.Fragment >
        );
    }
};