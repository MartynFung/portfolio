import * as React from 'react';

export default class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id='skills' className='s-skills target-section'>
          <div className='row section-content'>
            <h1>Skills</h1>
            <div className='skill-wrapper'>
              <div className='skill-column'>
                <h4>Languages</h4>
                <ul className='nobullet'>
                  <li>C#</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>SQL</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </div>
              <div className='skill-column'>
                <h4>Frameworks & Libraries</h4>
                <ul className='nobullet'>
                  <li>Angular</li>
                  <li>React</li>
                  <li>ASP.NET MVC</li>
                  <li>Web API</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className='skill-column'>
                <h4>Tools & Methodologies</h4>
                <ul className='nobullet'>
                  <li>Visual Studio</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>TFS</li>
                  <li>Azure</li>
                  <li>SQL Server</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
