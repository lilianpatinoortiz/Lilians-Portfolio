import { Form } from "../components/Form";

/* In our component: Destructure the data gotten from the PROPs */
function Contact({ data: { text } }) {
  return (
    <>
      <div id="contact">
        <h2>{text}</h2>
      </div>
      <div id="form">
        <Form></Form>
      </div>
      <br />
    </>
  );
}

export { Contact };
