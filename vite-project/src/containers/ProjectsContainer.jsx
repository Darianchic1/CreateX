import styled from 'styled-components'
import Button_circle from "../components/Button_circle/Button_circle";
import Accent from "../assets/images/accent.svg";
import Usual from "../assets/images/Usual.svg";
import Project from "../components/Project";
import First_img from '../assets/images/first_img.jpg'
import Second_img from '../assets/images/second_img.jpg'
import Third_img from '../assets/images/third_img.jpg'
import LearnMore from "../components/LearnMore";

const Cent = styled.div`
  margin-left: 30%;
  margin-top: -5%;
  margin-bottom: 5%;
`

const ProjectsContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`

const ProjectTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items:last baseline;
  justify-content: space-between;
`

const H1 = styled.p`
  font-size: 46px;
  font-weight: bold;
  width: 70%;
  line-height: 1.3;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`

const ProjectsCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5%;
`

function Projects() {
  return (
    <div id="projects">
      <ProjectsContainer>
        <ProjectTop>
          <H1>
            Browse our selected projects and learn more about our work
          </H1>
          <Buttons>
            <Button_circle type="Usual" svg={Usual}></Button_circle>
            <Button_circle type="Accent" svg={Accent}></Button_circle>
          </Buttons>
        </ProjectTop>
        <ProjectsCard>
          <Project article='Red Finger Building' disc='Business Centers' img={First_img} />
          <Project article='Cubes Building' disc='Business Centers' img={Second_img} />
          <Project article='The Pencil Building' disc='Stores & Malls' img={Third_img} />
        </ProjectsCard>
      </ProjectsContainer>
      <Cent>
        <LearnMore text="Explore all our works" act="VIEW PORTFOLIO" link="/projects" />
      </Cent>
    </div>
  );
}

export default Projects;
