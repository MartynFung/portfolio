import * as React from 'react';

export default class Resume extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume" className="s-resume target-section">
                    <div className="row resume-content resume-content--timeline">
                        <div className="col-full text-center">
                            <h1>Work Experience</h1>
                        </div>
                        <div className="col-one">.</div>
                        <div className="col-ten">
                            <div className="timeline">
                                <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">April 2018 - Present</p>
                                        <h3>Eleveight</h3>
                                        <h5>Full Stack Developer</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <ul>
                                            <li>Created a <strong>Data Visualization</strong> page to display demographic information in a list of pie charts by category. Utilized pivot tables, dynamic SQL, and User Defined Tables to aggregate data from numerous relational tables in our SQL Server Database. Data was transferred through the C# .NET layer, then parsed in React to display chart data.</li>
                                            <li>Developed <strong>Keyword Input and Search</strong> component to allow users to find scholarships based on the keywords that they subscribe to. Integrated SendGrid email delivery service in the C# middle tier so that users would receive email alerts for new scholarships matching their subscriptions.</li>
                                            <li>Constructed <strong>Scholarship Dashboard</strong> page that allowed a funding organization to manage scholarships. Built forms to submit scholarships using both front and back-end validation.</li>
                                            <li>Composed RESTful Web API endpoints that handled HTTP requests and data transfer with the SQL database.</li>
                                            <li>Attended daily SCRUM stand ups, weekly client demonstrations, strict code review process, and technical presentations.</li>
                                            <li>Adhered to team and industry standards with respect to API design, ES6 coding style, CSS selector conventions, promise handling, and secure authentication handled using cryptography and model validation in .NET.</li>
                                        </ul>
                                    </div>
                                </div> {/* end timeline__block */}
                                <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">June 2017 - April 2018</p>
                                        <h3>KME Systems Inc.</h3>
                                        <h5>IT Support Engineer</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <ul>
                                            <li>Performed system administrator roles such as user management and supervision of file permissions via Active Directory.</li>
                                            <li>Provided on-phone and online support for over one hundred users to facilitate effective operation of IT resources.</li>
                                            <li>Assessed impact of incoming requests and prioritized them in a fast paced, high-pressure environment.</li>
                                            <li>Used ticketing software to document issues, communicate with clients, and provide follow up contact.</li>
                                            <li>Utilized remote management software to assist in recovering a CEO’s stolen laptop.</li>
                                            <li>Built and configured virtual machine labs using VMWare for various phone and networking tests.</li>
                                        </ul>
                                    </div>
                                </div> {/* end timeline__block */}
                            </div> {/* end timeline */}
                        </div> {/* end left */}
                        <div className="col-one">.</div>
                    </div> {/* end about-content timeline */}
                </section>
            </React.Fragment>
        )
    }
}