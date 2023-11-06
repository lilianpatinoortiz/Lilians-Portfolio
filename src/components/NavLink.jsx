function NavLink({ link, name }) {
  return (
    <li>
      <button href={link}>{name}</button>
    </li>
  );
}

export { NavLink };
