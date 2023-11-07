function Project({ title, description, link }) {
  return (
    <>
      <a className="project" target="_clean" href={link}>
        <div className="project-content">
          <div>
            <h1>{title}</h1>
            <p className="description">{description}</p>
          </div>
        </div>
      </a>
    </>
  );
}

function Projects({ data: projects }) {
  const listsProjects = projects.map((project) => (
    <Project
      title={project.title}
      description={project.description}
      link={project.link}
    ></Project>
  ));
  return (
    <>
      <div id="portfolio">{listsProjects}</div>
    </>
  );
}

export { Projects };
