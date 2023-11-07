import { IconLink } from "../components/IconLink";

/* In our component: Destructure the data gotten from the PROPs */
function Contact({ data: { text, socialMediaData } }) {
  const socialMediaList = socialMediaData.map((socialMedia) => {
    <IconLink {...socialMedia} />;
  });

  return (
    <>
      <div id="contact">
        <h2>{text}</h2>
      </div>
      <br />
      <div>{socialMediaList}</div>
    </>
  );
}

export { Contact };
