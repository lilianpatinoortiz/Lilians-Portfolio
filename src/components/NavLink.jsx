function NavLink({ link, name }) {
  return (
    <li>
      <button>
        <a href={link}>{name}</a>
      </button>
    </li>
  );
}

export { NavLink };
