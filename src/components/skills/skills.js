import * as React from 'react';

export default class Skills extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="skills" className="s-skills target-section">
                    <div className="row section-content">
                        <div className="col-full text-center">
                            <h1>Skills</h1>
                        </div>
                        <div className="col-two">.</div>
                        <div className="col-eight text-left">
                            <ul>
                                <li><strong>Front End: </strong>React.js, Redux, JavaScript, TypeScript, jQuery, Bootstrap, HTML, CSS</li>
                                <li><strong>Middle Tier: </strong>C#, .NET</li>
                                <li><strong>Back End: </strong>SQL/T-SQL, Stored Procedures</li>
                            </ul>
                        </div>
                        <div className="col-two">.</div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}
