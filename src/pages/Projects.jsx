import { ButtonLinkList } from "../components/ButtonLinks";

/* In our component: Destructure the data gotten from the PROPs */
function Project({ title, description, links }) {
  return (
    <>
      <div className="project">
        <div className="project-content">
          <div>
            <h1>{title}</h1>
            <p className="description">{description}</p>
            <hr></hr>
            <ButtonLinkList data={links}></ButtonLinkList>
          </div>
        </div>
      </div>
    </>
  );
}

/* In our component: Rename the data prop array, for better understanding */
function Projects({ data: projects }) {
  /* Iterate through each project  and create a list of projects */
  const listsProjects = projects.map((project) => (
    /* Each element in a list has to have a unique key */
    <Project key={project.title} {...project}></Project>
  ));

  return (
    <>
      <div id="projects">
        <hr></hr> <br />
        <h1 className="subtitleLg"> My major projects</h1>
        <br />
        <div id="portfolio">{listsProjects}</div>
        <br />
      </div>
    </>
  );
}

export default Projects;
