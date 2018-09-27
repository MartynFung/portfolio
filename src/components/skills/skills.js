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
                                <li>C#, .NET, ADO.NET,  MVC, SQL, T-SQL, Stored Procedures, AWS</li>
                                <li>React, Redux, JavaScript, TypeScript, jQuery, Bootstrap, HTML5, CSS3, Material Design</li>
                                <li>Object-Oriented Programming, Agile, Scrum, Web API, RESTful API, WebPack, JSON, XML, AJAX</li>
                                <li>Visual Studio, SSMS, SQL Server, Git, GitHub, NPM, TFS, REST Client, SharePoint, Adobe Photoshop</li>
                            </ul>
                        </div>
                        <div className="col-two">.</div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}
