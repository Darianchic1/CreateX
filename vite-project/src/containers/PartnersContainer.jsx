import styled from 'styled-components'
import InDepth from '../assets/images/inDepth.svg'
import HigherHit from '../assets/images/higherHit.svg'
import Sentinal from '../assets/images/sentinal.svg'
import HappyHome from '../assets/images/happyHome.svg'
import ForSale from '../assets/images/forSale.svg'
import SunSet from '../assets/images/SunSet.svg'

const H1 = styled.p`
    font-size: 46px;
    color: #1E212C;
    font-weight: bold;
    text-align: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
    background-color: #F4F5F6;
    padding-bottom: 10%;
`

const Partners = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10%;
    margin-left: 10%;
    margin-right: 20%;
`

function PartnersContainer(){
    return(
        <Container>
            <H1>Supported by 12+ partners</H1>
            <Partners>
                <img src={InDepth}/>
                <img src={HigherHit}/>
                <img src={Sentinal}/>
                <img src={HappyHome}/>
                <img src={ForSale}/>
                <img src={SunSet}/>
            </Partners>
        </Container>
    )
}

export default PartnersContainer