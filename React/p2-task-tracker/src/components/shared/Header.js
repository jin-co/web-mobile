import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <ul>
        <li>
          <a href="">1</a>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">3</a>
        </li>
        <li>
          <a href="">{props.title}</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
