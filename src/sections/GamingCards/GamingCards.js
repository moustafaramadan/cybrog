import { Button, Col } from "react-bootstrap"
import "./GamingCards.css"

const GamingCards = (props) => {
  return (
    <div className="items">
      <Col lg={12}>
        <ul>
            <li>
                <img src={props.image}/>
            </li>
            <li>
                <h4> {props.title}</h4>
                <span> {props.cat}</span>
            </li>
            <li> <h4> Date Added </h4>
            <span> { props.date}</span>
            </li>
            <li> <h4> Hours Played</h4>
            <span>{props.Hours}</span>
            </li>
            <li> <h4> Currently</h4>
            <span>Downloaded</span>
            </li>
            <li> <Button> Download</Button></li>
        </ul>
      </Col>
    </div>
  )
}

export default GamingCards
