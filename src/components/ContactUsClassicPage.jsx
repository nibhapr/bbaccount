import React, { useRef } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion'
import { Form, Formik } from 'formik';
import { fancyTextBox02 } from '../components/FancyTextBox/FancyTextBoxData';
import FancyTextBox from '../components/FancyTextBox/FancyTextBox';
import { ContactFormStyle03Schema } from '../components/Form/FormSchema';
import { Checkbox, Input, TextArea } from '../components/Form/Form'
import Buttons from '../components/Button/Buttons'
import GoogleMap from '../components/GoogleMap/GoogleMap';

const ContactUsClassicPage = (props) => {
  const form = useRef(null)
  return (
    <div style={props.style}>
      <ParallaxProvider>
      
      <motion.div className="md:flex md:items-center overflow-hidden relative md:h-[465px] sm:h-[350px] xs:h-[357px]">
      <Parallax className="lg-no-parallax bg-cover cover-background absolute left-0 h-[80vh] top-[60px] lg:h-[64vh] lg:top-[-46px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-[-44px] sm:h-[49vh] xs:top-0 xs:h-[40vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/bb1.jpeg)` }}></Parallax>
      </motion.div> 
      </ParallaxProvider>

       <motion.section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="sm:justify-center">
            <Col xs={12} sm={8} md={12}>
              <FancyTextBox
                grid="justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 md:gap-y-[30px] xs:gap-y-[15px]"
                theme="fancy-text-box-02"
                data={fancyTextBox02}
                animation=""/>
            </Col>
          </Row>
        </Container>
      </motion.section> 
  

   
       <motion.section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col xl={6} lg={7} className="text-center mb-[4.5rem] md:mb-12">
              <span className="font-serif mb-[5px] -tracking-[.5px] text-xmd block">Fill out the form and we'll be in touch soon!</span>
              <h4 className="font-serif font-semibold text-darkgray">How we can help you?</h4>
            </Col>
            <Col className="col-xl-10 col-sm-12 col-xs-12">
              <Formik
                initialValues={{ name: '', email: '', phone: '', comment: '', terms_condition: false }}
                validationSchema={ContactFormStyle03Schema}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true)
                  const response = await sendEmail(values)
                  response.status === "success" && resetForm(actions)
                }}
              >
                {({ isSubmitting, status }) => (
                  <Form ref={form}>
                    <Row className="row-cols-1 row-cols-md-2">
                      <Col className="mb-16 sm:mb-[25px]">
                        <Input showErrorMsg={false} type="text" name="name" className="py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your name" />
                        <Input showErrorMsg={false} type="email" name="email" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" labelClass="mb-[25px]" placeholder="Your email address" />
                        <Input showErrorMsg={false} type="tel" name="phone" className="py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]" placeholder="Mobile number" />
                      </Col>
                      <Col className="mb-16 sm:mb-[20px]">
                        <TextArea className="border-[1px] border-solid border-[#dfdfdf] w-full py-[15px] px-[20px] text-md h-[210px] resize-none" rows="6" name="comment" placeholder="Your message"></TextArea>
                      </Col>
                      <Col className="text-left sm:mb-[20px]">
                        <Checkbox type="checkbox" name="terms_condition" className="inline-block mt-[4px]" labelClass="flex items-start">
                          <span className="ml-[10px] text-sm inline-block w-[85%]">I accept the terms & conditions and I understand that my data will be hold securely in accordance with the<a aria-label="checkbox" to="/privacy" target="_blank" className="text-darkgray underline hover:text-fastblue"> privacy policy</a>.</span>
                        </Checkbox>
                      </Col>
                      <Col className="text-right sm:text-center">
                        <Buttons type="submit" className={`text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""}`} themeColor={["#b884fd", "#fe73a8", "b884fd"]} size="md" color="#fff" title="Send Message" />
                      </Col>
                    </Row>
                    <AnimatePresence>
                      {status && <Row><Col xs={12}><div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></div></Col></Row>}
                    </AnimatePresence>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </motion.section> 
      

    
       <section>
        <GoogleMap
          className="grayscale h-[600px] p-0 md:h-[450px] xs:h-[300px]"
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8010430666145!2d55.33622517530839!3d25.277277428452617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5da1eaef86cd%3A0x6216e72c96fdb935!2sB%20%26%20B%20Accounting!5e0!3m2!1sen!2sin!4v1728370670614!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        />
      </section> 
     
    </div>
  )
}

export default ContactUsClassicPage