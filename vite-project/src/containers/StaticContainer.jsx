import styled from 'styled-components'
import BG from '../assets/images/bg-stat.png'
import StaticRound from '../components/StaticRound'
import News from './NewsContainer';

function StaticContainer() {
    const Container = styled.div`
    position: relative;
    padding-bottom: 5%;
    overflow: hidden;
`
    const Full = styled.div`
    padding-top: 15%;
    padding-bottom: 6%;
`

    const Rounds = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    margin-left: 25%;
`

    const Img = styled.img`
    width: 35%;
    position: absolute;
    top: -300px;
    left: 20px;
`

    const H1 = styled.p`
    font-size: 46px;
    font-weight: bold;
    text-align: center;
`

    return (
        <Container>
            <Img src={BG}></Img>
            <Full>
                <H1>Some facts and figures</H1>
                <Rounds>
                    <StaticRound number='98%' designation='Totally satisfied clients' borderColor="#F89828;" />
                    <StaticRound number='20' designation='Years of experience' borderColor="#F52F6E;" />
                    <StaticRound number='9452' designation='Working hours spent' borderColor="#5A87FC;" />
                    <StaticRound number='100%' designation='Succeeded projects' borderColor="#03CEA4;" />
                </Rounds>
            </Full>
            <News />
        </Container>
    )
}

export default StaticContainer