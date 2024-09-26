import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assests/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Prev } from "react-bootstrap/esm/PageItem";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" a passionate Computer Science Engineering student.", "web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(PrevDelta => PrevDelta / 2)
        }
        if (isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Sudhir Jaiswal,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>with a keen interest in web development, data analysis, and natural language processing. I enjoy building applications that solve real-world problems, and I’m currently working on projects involving text summarization, predictive maintenance, and UI/UX design. With experience in tools like React, TensorFlow, and Streamlit, I thrive on combining technical expertise with creativity. Whether it's developing efficient algorithms or designing intuitive user interfaces, I am driven to constantly learn and improve. When I'm not coding, you can find me exploring new technologies or working on problem-solving challenges on platforms like LeetCode.</p>
                                    <button onClick={() => window.location.href = 'https://www.linkedin.com/in/sudhir-jaiswal-a841a6225'}>
                                        Let’s Connect <ArrowRightCircle size={25} />
                                    </button>


                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}