/* In our component: Destructure the data gotten from the PROPs */
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

/* In our component: Rename the data to projects, for better understanding */
function Projects({ data: projects }) {
  /* Iterate through each project  and create a list of projects */
  const listsProjects = projects.map((project) => (
    /* Each element in a list has to have a unique key */
    <Project
      key={project.link}
      title={project.title}
      description={project.description}
      link={project.link}
    ></Project>
  ));

  return (
    <>
      <div id="portfolio">{listsProjects}</div>
      <hr></hr>
      <br />
    </>
  );
}

export { Projects };
