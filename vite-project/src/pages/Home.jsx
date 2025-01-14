import Header from "../containers/HeaderContainer";
import Slider from "../containers/SliderContainer";
import Values from "../containers/ValuesContainer";
import Projects from "../containers/ProjectsContainer";
import Form_page from "../containers/FormContainer";
import VideoContainer from "../containers/VideoContainer";
import Service_container from "../containers/ServiceContainer";
import PartnersContainer from "../containers/PartnersContainer";
import ClientContainer from "../containers/ClientsContainer";
import StaticContainer from "../containers/StaticContainer";
import FooterContainer from "../containers/FooterContainer";

export const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <VideoContainer />
            <Values/>
            <Service_container />
            <Projects/>
            <PartnersContainer/>
            <ClientContainer/>
            <StaticContainer/>
            <Form_page/>
            <FooterContainer/>
        </div>
    )
}