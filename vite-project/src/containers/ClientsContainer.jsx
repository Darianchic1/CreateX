import styled from 'styled-components'
import Men from "../assets/images/men.jpg"
import Client from '../components/Client'
import Profile from '../assets/images/profile.jpeg'


function ClientContainer() {
    const H1 = styled.p`
    font-size: 46px;
    color: #1E212C;
    font-weight: bold;
`

    const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: #F4F5F6;
    padding-bottom: 5%;
    padding-left: 10%;
    z-index: 6;
`

    const Relative = styled.div`
    position: absolute;
`
    const Right = styled.div`
    position: relative;
    `
    const Img = styled.img`
    width: 100%;
    margin-left: 150%;
    margin-top: 10%;
    overflow: visible;
    
`
    const text = 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. '
    return (
        <Container>
            <Right>
                <H1>What our clients are saying</H1>
                <Client img={Profile} review={text} name='Shawn Edwards' position='Position' company='Company' />
            </Right>
            <Relative>
                <Img src={Men}></Img>
            </Relative>
        </Container>
    )
}

export default ClientContainer