import { useState } from "react";

/* In our component: Destructure the data gotten from the PROPs */
function AboutMe({
  data: {
    name,
    position,
    location,
    linkedin,
    resume,
    bio,
    about: { intro, studies, self, closure },
  },
}) {
  const [hi5, setHi5] = useState(0);

  return (
    <>
      <div id="about">
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
              <a target="_clean" className="button" href={linkedin.link}>
                <button>My linkedin</button>
              </a>
              <a target="_clean" className="button" href={resume.link}>
                <button>Get my resume</button>
              </a>
            </div>
            <p className="scrolling"> Keep scrolling &#x2B07;</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <br />
      <div id="more">
        <h2>{bio}</h2>
      </div>
      <br />
      <hr></hr>

      <div id="skills">
        <div id="about-me-container">
          <section id="my-picture"></section>
          <section id="my-bio">
            <h1>About me,</h1>
            <br />
            <p>{intro}</p>
            <p>{studies}</p>
            <br />
            <p>{self}</p>
            <br />
            <p>{closure}</p>
          </section>
        </div>
      </div>
      <br />
      <div>
        <button onClick={() => setHi5((hi5) => hi5 + 1)}>
          Hi five me! 🤚 ( Count is {hi5} )
        </button>
      </div>
      <br />
    </>
  );
}

export { AboutMe };
