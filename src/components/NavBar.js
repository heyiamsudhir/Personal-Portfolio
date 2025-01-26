import { useState, useEffect } from "react";
import {Navbar,Container,Nav} from "react-bootstrap";
import logo from '../assests/img/sudhirlogo.svg';
import navIcon1 from '../assests/img/nav-icon1.svg';
import navIcon2 from '../assests/img/nav-icon2.svg';
import navIcon3 from '../assests/img/nav-icon3.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                     <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('experience')}>Experience</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="http://www.linkedin.com/in/sudhir-jaiswal-a841a6225"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/sudhir.jaiswal.73157?mibextid=ZbWKwL"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/heyiamsudhir?igsh=YWZuaGRjNXV5bDZ3"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => window.location.href = 'mailto:sudhirjaiswal093@gmail.com'}><span>Let's Connect</span></button>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}