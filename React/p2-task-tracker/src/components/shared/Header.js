import PropTypes from "prop-types";
import Button from "./Button";
import Tasks from "../Tasks";

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

const Header = ({ title }) => {
  const onClick = () => {
    console.log("heh");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick}/>
      <Tasks />
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
