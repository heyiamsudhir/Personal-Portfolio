import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assests/img/sudhirlogo.svg";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/sudhir-jaiswal-a841a6225"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/sudhir.jaiswal.73157?mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/heyiamsudhir?igsh=YWZuaGRjNXV5bDZ3"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}