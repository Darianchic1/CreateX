import styled from 'styled-components'
import BG from '../assets/images/texture.jpeg'
import Service from '../components/Service'
import LearnMore from '../components/LearnMore';

import Construction from "../assets/images/construction.svg";
import Plan from "../assets/images/plan.svg";
import Pantone from "../assets/images/pantone.svg";
import Painting from "../assets/images/painting.svg";

function Service_container() {
    const Img = styled.img`
        height: 900px;
        width: 100%;
        position: relative;
        opacity: 0.1;
    `

    const ServiceСontainer = styled.div`
        background-color: #E5E8ED;
        z-index: 1;
        position: relative;
    `

    const Fullity = styled.div`
        align-items: center;
        position: absolute;
        top: 20%;
        left: 10%;
        display: flex;
        flex-direction: column;
        gap: 10%;
    `

    const H1 = styled.p`
        font-size: 46px;
        font-weight: bold;
        color: #1E212C;
        margin-bottom: 2%;
    `

    const P = styled.p`
        font-size: 18px;
        color: #787A80;
        margin-top: 2%;
    `

    const Services = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: 35% 35% 35% 35%;
        gap: 5%;
        margin-bottom: 10%;
    `

    const Texts = styled.div`
        margin-left: 60%;
        text-align: center;
        width: 100%;
        margin-bottom: 5%;
    `

    const Cent = styled.div`
        margin-left: 70%;
        width: 100%;
    `

    return (
        <ServiceСontainer id="services">
            <Img src={BG}></Img>
            <Fullity>
                <Texts>
                    <H1>Our services</H1>
                    <P>Createx Construction Bureau is a construction giant with a full range of construction services.</P>
                </Texts>
                <Services>
                    <Service
                        svg={Construction}
                        name_service="Construction"
                    />
                    <Service
                        svg={Plan}
                        name_service="Project Development"
                    />
                    <Service
                        svg={Pantone}
                        name_service="Interior Design"
                    />
                    <Service
                        svg={Painting}
                        name_service="Repairs"
                    />
                </Services>
                <Cent>
                    <LearnMore text="Learn more about our services" act="VIEW SERVICES" link="/services" />
                </Cent>
            </Fullity>
        </ServiceСontainer>
    )
}

export default Service_container