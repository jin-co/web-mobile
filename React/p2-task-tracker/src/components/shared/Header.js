import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

// const Header = (props) => {
//   return (
//     <header className="header">
//       <ul>
//         <li>
//           <a href="">1</a>
//         </li>
//         <li>
//           <a href="">2</a>
//         </li>
//         <li>
//           <a href="">3</a>
//         </li>
//         <li>
//           <a href="">{props.title}</a>
//         </li>
//         <li>
//           <a href="">{props.what}</a>
//         </li>
//       </ul>
//     </header>
//   );
// };

// const Header = ({title, what}) => {
//   return (
//     <header className="header">
//       <ul>
//         <li>
//           <a href="">1</a>
//         </li>
//         <li>
//           <a href="">2</a>
//         </li>
//         <li>
//           <a href="">3</a>
//         </li>
//         <li style={headingStyle}>
//           <a href="">{title}</a>
//         </li>
//         <li>
//           <a href="" style={{color: 'blue'}}>{what}</a>
//         </li>
//       </ul>
//     </header>
//   );
// };

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "green" : "red"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  what: "the",
};

// setting types
Header.propTypes = {
  title: PropTypes.string,
  what: PropTypes.string.isRequired,
};

// inline style
const headingStyle = {
  color: "red",
  backgroundColor: "grey",
};

export default Header;
