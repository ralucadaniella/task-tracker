import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        showAddTask={showAddTask}
        onClick={showAddTask}
      />
    </header>
  );
};

// this is used for catching error and set the type (like Typescript)
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//define the properties of the component
Header.defaultProps = {
  title: "Task Tracker",
};

//Css in Js
// const headingStyles = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
