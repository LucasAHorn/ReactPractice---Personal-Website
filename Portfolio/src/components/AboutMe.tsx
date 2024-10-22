import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importing brand icons
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-left">
        <h1>About Me</h1>
        <p>
          Hi, I'm Lucas Horn, a Software Engineering student at Iowa State University.
          I have a passion for coding, developing projects, and embracing new challenges.
          From my experience in hackathons to my leadership roles, I'm constantly seeking
          new opportunities to grow as a developer.
        </p>
        <a href="src\assets\Resume - Lucas Horn.pdf" target="_blank" rel="noopener noreferrer">
          <button className="resume-button">View Resume</button>
        </a>
      </div>
      <div className="about-me-right">
        <img src="src\assets\aboutMe.jpeg" alt="Lucas Horn" className="profile-image" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lucasahorn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/lucasahorn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
