function AboutMe({
  data: { name, position, location, linkedin, resume, more },
}) {
  // We destructure the data object to use the attributes
  return (
    <>
      <div id="about">
        <div className="background-image"></div>
        <div className="container">
          <div className="center-vertically">
            <h1>
              Hi, I'm <strong>{name}</strong>
            </h1>
            <br />
            <h2>
              {position} in {location}.
            </h2>
            <br />
            <div className="aboutme-buttons">
              <button href={linkedin.link}>My linkedin</button>
              <button href={resume.link}> Get my resume</button>
            </div>
            <p className="scrolling"> Keep scrolling &#x2B07;</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <br />
      <div id="more">
        <h2>{more}</h2>
      </div>
      <br />
      <hr></hr>
    </>
  );
}

export { AboutMe };
