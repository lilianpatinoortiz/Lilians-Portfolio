import { NavLinkList } from "../components/NavLink";

/* In our component: Destructure the data gotten from the PROPs */
function Project({ title, description, links }) {
  return (
    <>
      <a className="project">
        <div className="project-content">
          <div>
            <h1>{title}</h1>
            <p className="description">{description}</p>
            <hr></hr>
            <NavLinkList data={links}></NavLinkList>
          </div>
        </div>
      </a>
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
      <hr></hr> <br />
      <div id="portfolio">{listsProjects}</div>
      <br />
    </>
  );
}

export { Projects };
