import Tab01 from '../components/Tab/Tab01';
import { m } from "framer-motion";
import { TabData01 } from '../components/Tab/TabData';
import { Col, Container,Row } from 'react-bootstrap';

const TabComponents = () => {

    return (
<m.section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white">
<Container>
  <Tab01 data={TabData01} />
</Container>
</m.section>

    )}

    export default TabComponents