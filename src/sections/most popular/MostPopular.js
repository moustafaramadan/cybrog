import "./MostPopular.css"
import  {Card, SectionWrapper} from"../indexs"
import { Col, Row } from "react-bootstrap"
import MostPopularData from "../../Data/MostPopularData"
import { Button } from "../../components"
const MostPopular = () => {
  const cards= MostPopularData.map(card =>{
    return <Card key={card.id} image={card.image}  title= {card.title} cat ={ card.cat }/>
  });
  return (
      <SectionWrapper>
        <h4> Most Popular</h4>
        <Row>
          {cards}
          <Col lg={12} >
            <div className="btn-design">
            <Button> Discover Popular </Button>

            </div>
          </Col>
        </Row>
      </SectionWrapper>
  )
}

export default MostPopular
