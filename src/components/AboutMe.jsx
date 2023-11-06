function AboutMe({ data: { name, position, location } }) {
  // We deconstruct the data to use the attributes
  return (
    <>
      <div className="container">
        <h1>
          Hi, I'm <strong>{name}</strong>
        </h1>
        <br />
        <h2>
          {position} in {location}.
        </h2>
        <br />
        <div className="aboutme-buttons">
          <button>My linkedin</button>
          <button> Get my resume</button>
        </div>
        <p className="scrolling"> Keep scrolling &#x2B07;</p>
      </div>
    </>
  );
}

export { AboutMe };
