import { Col } from "react-bootstrap";
import "./Card.css";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
        <Col lg={3}>
          <div className="card-item">
            <img className="card-img" src={props.image} />
            <div className="float-start custom-float">
              <p style={{"fontWeight": "bolder"}}> {props.title} </p>
              <p style={{"color" : "#eee"}}> {props.cat} </p>
            </div>
            <div className="float-end custom-float">
            <ul>
              <li> <span style={{"color": "yellow"}}> <FaStar/> </span>4.8</li>
              <li><span style={{"color": "var(--color-primary)"}}> <FaDownload/> </span>2.3M</li>
            </ul>
            </div>          
          </div>
        </Col>
        </>

  );
};

export default Card;
