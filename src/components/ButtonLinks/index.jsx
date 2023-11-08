/* In our component: Rename the data gotten from the PROPs */
const ButtonLinkList = ({ data: links }) => {
  /* Iterate through each link  and create a list of links */
  const listLinks = links.map((link) => (
    /* Each element in a list has to have a unique key */
    <ButtonLink key={link.link} {...link} />
  ));

  /* Each element in a list has to have a unique key */
  return <ul className="nav">{listLinks}</ul>;
};

/* In our component: Destructure the data gotten from the PROPs */
const ButtonLink = ({ link, name }) => {
  /* Each element in a list has to have a unique key */
  return (
    <li key={link}>
      <button>
        <a href={link}>{name}</a>
      </button>
    </li>
  );
};

export { ButtonLink, ButtonLinkList };
