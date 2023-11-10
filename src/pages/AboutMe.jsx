import { useState } from "react";

/* In our component: Destructure the data gotten from the PROPs */
function AboutMe({
  data: {
    bio,
    about: { intro, studies, self, closure },
  },
}) {
  const [hi5, setHi5] = useState(0);

  return (
    <>
      <hr></hr> <br />
      <div id="more">
        <h2>{bio}</h2>
      </div>
      <br />
      <hr></hr>
      <div id="aboutme">
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
        <button id="hi5Button" onClick={() => setHi5((hi5) => hi5 + 1)}>
          Hi five me! 🤚 ( Count is {hi5} )
        </button>
      </div>
      <br />
    </>
  );
}

export default AboutMe;
