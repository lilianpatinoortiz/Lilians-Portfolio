/* In our component: Destructure the data gotten from the PROPs */
const NavLink = ({ link, name }) => {
  /* Each element in a list has to have a unique key */
  return (
    <li key={link}>
      <button>
        <a href={link}>{name}</a>
      </button>
    </li>
  );
};

export { NavLink };
