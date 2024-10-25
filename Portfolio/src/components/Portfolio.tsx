import '../styles/Portfolio.css';

const projects = [
  {
    name: 'Playlist Transfer Tool',
    codeBase: ['Python', 'Typescript', 'React', 'Flask'],
    description: 'A tool that transfers YouTube Music playlists to Spotify built with members of the CSE club at ISU',
    githubLink: 'https://github.com/LucasAHorn/Playlist-Platform-Transfer-Project'
  },
  {
    name: 'Pet Prescription Tracker',
    codeBase: ['Javascript', 'React'],
    description: 'A React application providing animal prescription information, utilizing the FDA Green Book. Awarded "Best Technical Build" at BuildDSM V1 Hackathon.',
    githubLink: 'https://github.com/nwfrank/builddsm'
  },
  {
    name: 'Portfolio Website V1',
    codeBase: ['HTML', 'JS', 'CSS', 'Bootstrap'],
    description: 'Previous iteration of my portfolio website',
    githubLink: 'https://github.com/LucasAHorn/LucasAHorn.github.io'
  },
  {
    name: 'Portfolio Website V2',
    codeBase: ['Typescript', 'CSS', 'React'],
    description: 'Current iteration of my portfolio website, (what you are viewing right now)',
    githubLink: 'https://github.com/LucasAHorn/ReactPractice---Personal-Website',
  }

  // Add more projects as needed
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <div className="card" key={index}>
              <div className="card-content">
                <div className="card-text">
                  <h2>{project.name}</h2>
                  <p>
                    View on GitHub
                  </p>
                </div>
                <div className="card-hover-text">
                  <p>{project.description}</p>
                  <p>{project.codeBase.join(", ")}</p>
                </div>
              </div>
            </div>
        </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;