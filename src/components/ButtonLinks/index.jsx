/* In our component: Rename the data gotten from the PROPs */
const ButtonLinkList = ({ data: links }) => {
  /* Iterate through each link  and create a list of links */
  const listLinks = links.map((link) => (
    /* Each element in a list has to have a unique key */
    <li key={link.link}>
      <ButtonLink key={link.link} {...link} />
    </li>
  ));

  /* Each element in a list has to have a unique key */
  return <ul className="nav">{listLinks}</ul>;
};

/* In our component: Destructure the data gotten from the PROPs */
const ButtonLink = ({ link, name }) => {
  /* Each element in a list has to have a unique key */
  return (
    <button>
      <a href={link}>{name}</a>
    </button>
  );
};

export { ButtonLink, ButtonLinkList };
