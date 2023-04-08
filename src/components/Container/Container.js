import { Row } from "react-bootstrap";
import "./Container.css";
import "../../sections/Hero/Hero";
const Container = (props) => {
  return (
    <div className="container ">
      <div className="main-container">
        {props.children}
       </div>
    </div>
  );
};

export default Container;
