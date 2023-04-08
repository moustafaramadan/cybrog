import { Col, Row } from "react-bootstrap"
import "./GamingLibrary.css"
import  {GamingCards, SectionWrapper} from"../indexs"
import GamingCardsData from "../../Data/GamingCardsData"
import { Button } from "../../components"
const GamingLibrary = () => {
    const gameCards= GamingCardsData.map(card=>{
        return <GamingCards key={card.id} image={card.image} title={card.title} cat={card.cat} date={card.date} Hours={card.Hours}/>
    })
  return (
    <SectionWrapper>
    <h4> Gaming Library</h4>
    <Row>
        {gameCards}
        <Col lg={12} >
            <div className="btn-design">
            <Button> View your Library </Button>

            </div>
          </Col>
    </Row>
  </SectionWrapper>
  )
}

export default GamingLibrary
