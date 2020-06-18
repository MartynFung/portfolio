import * as React from 'react';

export default class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id='resume' className='s-resume target-section'>
          <div className='row resume-content resume-content--timeline'>
            <div className='col-full text-center'>
              <h1>Work Experience</h1>
            </div>
            <div className='col-one'>.</div>
            <div className='col-ten'>
              <div className='timeline'>
                <div className='timeline__block'>
                  <div className='timeline__bullet' />
                  <div className='timeline__header'>
                    <p className='timeline__timeframe'>
                      November 2019 - March 2020
                    </p>
                    <h3>Restaurant365</h3>
                    <h5>Software Engineer</h5>
                  </div>
                  <div className='timeline__desc'>
                    <ul>
                      <li>
                        Maintained high-traffic accounting module of restaurant
                        management application using Angular and React.
                      </li>
                      <li>
                        Worked closely with design team to deliver high-quality
                        UX/UI solutions based on client requirements.
                      </li>
                      <li>
                        Composed REST API endpoints to generate accounting
                        reports using Entity Framework and .NET Core.
                      </li>
                      <li>
                        Utilized AWS Lambda and S3 to set up workflows for
                        uploading and storing financial documents.
                      </li>
                      <li>
                        Practiced Agile methodologies involving two-week
                        sprints, daily standups, and code reviews.
                      </li>
                    </ul>
                  </div>
                </div>{' '}
                {/* end timeline__block */}
                <div className='timeline__block'>
                  <div className='timeline__bullet' />
                  <div className='timeline__header'>
                    <p className='timeline__timeframe'>
                      October 2018 - November 2019
                    </p>
                    <h3>FieldConnect</h3>
                    <h5>Software Engineer</h5>
                  </div>
                  <div className='timeline__desc'>
                    <ul>
                      <li>
                        Developed and designed a fleet management application
                        with a drag-and-drop scheduler and map view using
                        Angular, HTML, CSS, and JavaScript.
                      </li>
                      <li>
                        Integrated Azure Maps API to display technician
                        locations on a map to optimize dispatching.
                      </li>
                      <li>
                        Leveraged Microsoft’s Azure Portal for managing and
                        deploying application resources.
                      </li>
                      <li>
                        Utilized Google Material Design practices to create an
                        engaging user experience.
                      </li>
                    </ul>
                  </div>
                </div>{' '}
                {/* end timeline__block */}
                <div className='timeline__block'>
                  <div className='timeline__bullet' />
                  <div className='timeline__header'>
                    <p className='timeline__timeframe'>
                      April 2018 - October 2018
                    </p>
                    <h3>Eleveight</h3>
                    <h5>Full Stack Developer</h5>
                  </div>
                  <div className='timeline__desc'>
                    <ul>
                      <li>
                        Created a <strong>Data Visualization</strong> page to
                        display demographic information in a list of pie charts
                        by category. Utilized pivot tables, dynamic SQL, and
                        User Defined Tables to aggregate data from numerous
                        relational tables in our SQL Server Database. Data was
                        transferred through the C# .NET layer, then parsed in
                        React to display chart data.
                      </li>
                      <li>
                        Developed <strong>Keyword Input and Search</strong>{' '}
                        component to allow users to find scholarships based on
                        the keywords that they subscribe to. Integrated SendGrid
                        email delivery service in the C# middle tier so that
                        users would receive email alerts for new scholarships
                        matching their subscriptions.
                      </li>
                      <li>
                        Constructed <strong>Scholarship Dashboard</strong> page
                        that allowed a funding organization to manage
                        scholarships. Built forms to submit scholarships using
                        both front and back-end validation.
                      </li>
                      <li>
                        Built various reusable <strong>React components</strong>{' '}
                        utilized sitewide.
                      </li>
                      <li>
                        Created SQL tables and stored procedures using Dynamic
                        SQL, UDTs, and custom views.
                      </li>
                      <li>
                        Composed <strong>REST API</strong> endpoints that
                        handled HTTP requests with the SQL database.
                      </li>
                    </ul>
                  </div>
                </div>{' '}
                {/* end timeline__block */}
                <div className='timeline__block'>
                  <div className='timeline__bullet' />
                  <div className='timeline__header'>
                    <p className='timeline__timeframe'>
                      June 2017 - April 2018
                    </p>
                    <h3>KME Systems Inc.</h3>
                    <h5>IT Support Engineer</h5>
                  </div>
                  <div className='timeline__desc'>
                    <ul>
                      <li>
                        Performed system administrator roles such as user
                        management and supervision of file permissions via
                        Active Directory.
                      </li>
                      <li>
                        Assessed impact of incoming requests and prioritized
                        them in a fast paced, high-pressure environment.
                      </li>
                      <li>
                        Used ticketing software to document issues, communicate
                        with clients, and provide follow up contact.
                      </li>
                      <li>
                        Built and configured virtual machine labs using VMWare
                        for various phone and networking tests.
                      </li>
                      <li>
                        Provided on-phone and online support for over one
                        hundred users.
                      </li>
                    </ul>
                  </div>
                </div>{' '}
                {/* end timeline__block */}
              </div>{' '}
              {/* end timeline */}
            </div>{' '}
            {/* end left */}
            <div className='col-one'>.</div>
          </div>{' '}
          {/* end about-content timeline */}
        </section>
      </React.Fragment>
    );
  }
}
