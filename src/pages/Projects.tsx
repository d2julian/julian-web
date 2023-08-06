import TitleSection from '../components/titleSection/TitleSection';
import Constants from '../constants/Constants';
import Project from '../components/project/Project';

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-bg-triangle-purple lg:bg-cover bg-auto flex flex-col items-center lg:min-h-screen min-h-25 p-9">
      <TitleSection title="PROJECTS" description="Stuff i have worked" />
      {Constants.PROJECTS.map(p => (
        <Project title={p.title} description={p.description} info={p.info} image={p.image} />
      ))}
    </section>
  );
};

export default Projects;
