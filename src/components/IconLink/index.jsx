/* In our component: Destructure the data gotten from the PROPs */
const IconLink = ({ icon, link, name }) => {
  console.log("******");
  console.log(name);

  return (
    /* Each element in a list has to have a unique key */
    <div>
      <a target="_clean" href={link}>
        {name}
      </a>
    </div>
  );
};

export { IconLink };
