import FooterData from '../components/Footer/FooterData';
import FooterMenu, { Footer } from '../components/Footer/Footer';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

const FooterComponent = (props) => {

    return (
<Footer className="bg-[#262b35] text-slateblue" theme="dark">

  <Container>
    <Row className="justify-between md:justify-center sm:justify-between">
     
      <FooterMenu data={FooterData.slice(0, 4)} lg={{ span: 2, offSet: 1, order: 0 }} md={{ span: 3, order: 0 }} sm={{ span: 4, offSet: 1, order: 2 }} className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]" titleClass="capitalize" />
    </Row>
  </Container>

</Footer>

    )
}

export default FooterComponent