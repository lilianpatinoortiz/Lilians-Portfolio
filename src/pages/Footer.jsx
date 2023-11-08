import { IconList } from "../components/Icons";
/* In our component: Destructure the data gotten from the PROPs */
function Footer({ data: { text, socialMediaData } }) {
  return (
    <>
      <footer>
        <h3>
          {text}
          <IconList {...socialMediaData}></IconList>
        </h3>
      </footer>
    </>
  );
}

export { Footer };
