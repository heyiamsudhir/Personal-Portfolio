import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assests/img/ASL_Landing.jpg";
import projImg2 from "../assests/img/TextUtils.jpg";
import projImg3 from "../assests/img/Textsummarizer.jpg";
import colorSharp2 from "../assests/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = ({ theme }) => {
  const projects = [
    {
      title: "ASL Landing Page",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "React App TextUtils",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Text Summarization Project",
      description: "Machine Learning & NLP",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className={`project ${theme === "dark" ? "dark-mode" : "light-mode"}`} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    I’ve worked on diverse projects, including a text summarization model using NLP,
                    a predictive maintenance system, and a React-based web app (TextUtils). I’ve
                    also analyzed Netflix data for insights and developed a webpage for American
                    Sign Language detection.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          In addition to my core projects, I continuously work on problem-solving
                          challenges on platforms like LeetCode and Coding Ninjas. I’m also keen on
                          UI/UX design and love exploring new technologies to expand my skill set.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I also enjoy collaborating on creative projects and learning new skills to
                          stay updated with the latest technology trends.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
