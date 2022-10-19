// import logo from './logo.svg';
// import './App.css';
import './index.scss';

function App() {
  return (
    <div className="App">
      <div id="lead">
        <div id="lead-content">
            <h1>Rimpei Shiratori</h1>
            <h2>Software Engineer</h2>
            <a href="../public/resume_c#.pdf" download="rimpei_shiratori_resume" class="btn-rounded-white">Download Resume</a>
        </div>

        <div id="lead-overlay"></div>
    </div>

    <div id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="heading">About Me</h2>
                </div>
                <div class="col-md-8">
                    <p>
                        Full Stack Developer with professional experience developing web applications using React.JS, Node.JS, Express, and PostgreSQL and strong abilities in REST APIs. Confident with a range of frontend and backend languages and UI development using Figma. Familiar with Angular and experienced using Agile methodologies in cross-functional teams. 
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div id="skills">
        <h2 class="heading">Skills</h2>
        <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Node.JS</li>
            <li>Angular</li>
            <li>React.JS</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>C#</li>
            <li>PostgreSQL</li>
            <li>Linux</li>
            <li>Bash</li>
            <li>Git</li>
            <li>Azure</li>
            <li>HTML/CSS</li>
        </ul>
    </div>

    <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
          <div class="workExperience">
            <div class="workExperienceDetails">
              <h3 style={{display: "inline"}}>Nemesis Coffee <h6 style={{display: "inline"}}>January 2022 – May 2022</h6></h3>
                <h4>Full Stack Developer</h4>
                <p>
                    Built a web application in a cross-function development team using Agile methodologies to
                    manage costs and inventory across 3 locations and replace existing manual business systems.
                </p>
                <p>
                    Developed frontend system with ReactJS, Material-UI.
                </p>
                <p>
                    Developed backend system with NodeJS, Express, and PostgreSQL.
                </p>
                <p>
                    Designed UI of the application using Figma after presenting mockups to iterate based on the client’s feedback.
                </p>
            </div>
              
          </div>

          <div class="workExperience">
            <div class="workExperienceDetails">
                <h3 style={{display: "inline"}}>CGEC <h6 style={{display: "inline"}}>November 2021 – December 2021</h6></h3>
                <h4 >Business Specialist</h4>
                <p>
                    Organized a database on Salesforce by creating suitable fields and deleting unnecessary ones.
                </p>
                <p>
                    Optimized Google&Yahoo ads keyword by researching the trend based in Japan.
                </p>
            </div>
          </div>
    </div>

    <div id="education">
        <h2 class="heading">Education</h2>
        <div class="education-block">
            <h3>British Columbia Institute of Technology</h3>
            <span class="education-date">Sept 2020 - May 2022</span>
            <h4>Diploma - Predictive Analytics option</h4>
            <p>
                OOP
            </p>
            <p>
                OS/Networking
            </p>
            <p>
                Web Development
            </p>
            <p>
                Data Structure & Algorithms
            </p>
            <p>
                Predictive Analytics
            </p>
            <p>
                Database
            </p>
        </div>
    </div>

    <div id="projects" class="background-alt">
        <h2 class="heading">Projects</h2>
        <div class="container">
            <div class="row">
                <div class="project no-image">
                    <div class="project-info">
                        <h3>Public Book Catalogue</h3>
                        <p>
                            Public Book Catalogue that everyone can share their favorite books.
                        </p>
                        <p>
                            C#, .NET, Azure using MVC model
                        </p>
                        <a href="https://mybookcatalog.azurewebsites.net" target="_blank">View Project</a>
                    </div>
                </div>

                <div class="project no-image">
                    <div class="project-info">
                        <h3>YouTube Channel Data Visualization</h3>
                        <p>
                            Visualized informative graphs in Tableau using data collected from YouTube API
                        </p>
                        <p>
                            Cleaned, and stored data in MySQL database and exported it in CSV file
                        </p>
                        <p>
                            Python, MySQL, Tableau, YouTube API
                        </p>
                        <a href="https://public.tableau.com/app/profile/rimpei7310/viz/YouTubeChannelAnalysisDashboard/Dashboard2" target="_blank">View Project</a>
                    </div>
                </div>

                <div class="project no-image">
                    <div class="project-info">
                        <h3>Outivity</h3>
                        <p>
                            React.JS web application that suggests user's activities to do based on the weather
                        </p>
                        <p>
                            React.JS, Node.JS, MySQL, WebGL Maps
                        </p>
                        <a href="https://github.com/Rimpei2000/ISAproject" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-5 copyright">
                    <p>
                        Copyright &copy; <span id="current-year">2022</span> Rimpei Shiratori
                    </p>
                </div>
                
                <div class="col-sm-5 social">
                    <ul>
                        <li>
                            <a href="https://github.com/Rimpei2000" target="_blank">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rimpei-s-4b76401bb/" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
