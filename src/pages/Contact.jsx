import { ContactForm } from "../components/ContactForm";

/* In our component: Destructure the data gotten from the PROPs */
function Contact({ data: { text, socialMediaData } }) {
  return (
    <>
      <div id="contact">
        <h2 className="subtitle">{text}</h2>
        <div id="contact-form">
          <ContactForm></ContactForm>
        </div>
        <br />
        <h2 className="subtitle">FIND ME ON</h2>
        <h3> insert icons here </h3>
      </div>
      <br />
    </>
  );
}

export { Contact };
