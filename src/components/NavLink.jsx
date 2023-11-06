function NavLink({ myclass, link, name }) {
  return (
    <li class={myclass}>
      <button href={link}>{name}</button>
    </li>
  );
}

export { NavLink };
