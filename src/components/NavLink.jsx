/* In our component: Destructure the data gotten from the PROPs */
function NavLink({ link, name }) {
  return (
    /* Each element in a list has to have a unique key */
    <li key={link}>
      <button>
        <a href={link}>{name}</a>
      </button>
    </li>
  );
}

export { NavLink };
