import React, { memo, useContext, useEffect } from "react"
import { Col,Container, Row } from "react-bootstrap"
import GlobalContext from "../../Context/Context"
import "../../assets/scss/layouts/_footer.scss"
import logo from "../../assets/img/sample.jpg"

export const Footer = (props) => {
   
    const { setFooterHeight } = useContext(GlobalContext);

    useEffect(() => {
   
        let footerEl = document.querySelector("footer");

        function setTopSpace() {
            let windowWidth = window.innerWidth;
            let footerHeight = 0;

            if (props.parallax) {
                if (props.parallax.desktop === true) {
                    footerHeight = footerEl.offsetHeight;
                    footerEl.classList.add("pos-fixed")
                }

                if (windowWidth <= 1199) {
                    if (props.parallax.lg === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.lg === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 991) {
                    if (props.parallax.md === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.md === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 767) {
                    if (props.parallax.sm === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.sm === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 575) {
                    if (props.parallax.xs === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed");
                    }

                    if (props.parallax.xs === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }
            }

            setFooterHeight(footerHeight - 1)
        }

        setTimeout(setTopSpace, 1000);
        window.addEventListener("resize", function () {
            setTimeout(setTopSpace, 1000);
        });
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <footer className={`${props.theme}${props.className ? ` ${props.className}` : ""}`} style={props.style}>
            {props.children}
        </footer>
    )
}

const FooterMenu = ({ data, titleClass, className, ...props }) => {
    return (
        <>
           
            <div className="py-[40px] border-t border-[#ffffff1a]">
            <Container>
                    <Row>
                        <Col md={3} className="sm:mb-[20px]">
                            <a aria-label="homepage" to="/" className="sm:flex sm:justify-center">
                                <img alt="logo" src="../../assets/img/sample.jpg" width="111" height="36" />
                            </a>
                        </Col>
                        <Col md={6} className="flex justify-center items-center text-center sm:mb-[20px]">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Litho is Proudly Powered by <a aria-label="themezaa" rel="noreferrer" href="https://www.themezaa.com/" className="hover:text-white" target="_blank"> ThemeZaa</a></p>
                        </Col>
                        <Col md={3} className="text-right sm:text-center">

                        </Col>
                    </Row>
                    </Container>
            </div>
        </>
        
        
    )
    
}



Footer.defaultProps = {
    theme: "dark",
    logo: "/assets/img/sample.jpg"
}

export default memo(FooterMenu)