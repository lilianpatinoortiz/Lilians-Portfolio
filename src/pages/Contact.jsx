import { ContactForm } from "../components/ContactForm";

/* In our component: Destructure the data gotten from the PROPs */
function Contact({ data: { text } }) {
  return (
    <>
      <div id="contact">
        <h2>{text}</h2>
        <div id="contact-form">
          <ContactForm></ContactForm>
        </div>
      </div>
      <br />
    </>
  );
}

export { Contact };
