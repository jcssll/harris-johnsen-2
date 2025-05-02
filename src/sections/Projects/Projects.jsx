import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://talkeez.org/"
          h3="TalkEEZ"
          p="Autism/Communication - E-Commerce App MySQL|Shopify API"
        />
        <ProjectCard
          src={freshBurger}
          link="https://porschedealership-dgethja6b7dcc3h4.canadacentral-01.azurewebsites.net/"
          h3="Porsche"
          p="C# & Razor Application"
        />
        <ProjectCard
          src={hipsster}
          link="https://hackernews-hfavfhdqd8f9byge.canadacentral-01.azurewebsites.net/"
          h3="HackerNews"
          p="Hacker News API Angular 17 & .Net Core"
        />
        <ProjectCard
          src={fitLift}
          link="https://stellular-begonia-d9d505.netlify.app/"
          h3="Sites & Wonders"
          p="Web Agency executed with React "
        />
      </div>
    </section>
  );
}

export default Projects;
