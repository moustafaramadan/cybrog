import "./Footer.css"
import { Col, Container, Row } from 'react-bootstrap'
const Footer = () => {
//  document.getElementById("year").innerHTML= new Date().getFullYear();
 return (
   <Container>
     <Row>
       <Col lg={12}>
        <div className='footer'>
        <p>
           Copyright © <span dangerouslySetInnerHTML={{ __html: new Date().getFullYear() }}></span>{" "}
           Cyborg Gaming Company. All rights reserved.
         </p>
        </div>
       
       </Col>
     </Row>
   </Container>
 );
}

export default Footer
