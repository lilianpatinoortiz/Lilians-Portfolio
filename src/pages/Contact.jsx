import { ContactForm } from "../components/ContactForm";
import { IconList } from "../components/Icons";

/* In our component: Destructure the data gotten from the PROPs */
function Contact({ data: { text, socialMediaData } }) {
  return (
    <>
      <hr></hr>
      <div id="contact">
        <IconList size="50" {...socialMediaData}></IconList>
        <br />
        <h2 className="subtitle">{text}</h2>
        <br />
        <div id="contact-form">
          <ContactForm></ContactForm>
        </div>
      </div>
      <br />
    </>
  );
}

export default Contact;
