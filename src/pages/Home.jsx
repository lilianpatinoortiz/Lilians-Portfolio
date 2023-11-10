import { useState } from "react";

/* In our component: Destructure the data gotten from the PROPs */
function AboutMe({ data: { name, position, location, linkedin, resume } }) {
  const [hi5, setHi5] = useState(0);

  return (
    <>
      <hr></hr>
      <div id="aboutme-header">
        <div className="container">
          <div className="center-vertically">
            <h1>
              Hi, I'm{" "}
              <strong className="highlited">
                {name.firstName} {name.lastName}
              </strong>
            </h1>
            <br />
            <h2>
              {position} in {location}.
            </h2>
            <br />
            <div className="aboutme-buttons">
              <a target="_clean" className="button" href={linkedin.link}>
                <button className="primary">My linkedin</button>
              </a>
              <a target="_clean" className="button" href={resume.link}>
                <button className="primary">Get my resume</button>
              </a>
            </div>
            <p className="scrolling"> Keep scrolling &#x2B07;</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
