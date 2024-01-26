const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-medium">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-zinc-400 hover:text-white duration-200
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;