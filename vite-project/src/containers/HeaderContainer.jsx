import styled from 'styled-components'
import Contact from '../components/Contact'
import Phone from '../assets/images/iPhone.svg'
import Chat from '../assets/images/Chat.svg'
import Logo from '../assets/images/logo.svg'

function Header() {
    const HeaderContainer = styled.div`
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    margin-left: 7%;
    margin-bottom: 5%;
    background-color: white;
`

    const Left = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
`

    const Right = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

    const Img = styled.img`
    width: 130px;
    height: 22px;
`

    const P = styled.p`
    font-weight: bold;
    font-size: 16px;
`

    const A = styled.a`
    font-weight: bold;
    font-size: 16px;
    color: black;

    transition: background-color 0.5s;
    cursor: pointer; 

    &:hover {
        color: #FF5A30; 
    }
`
    return (
        <HeaderContainer>
            <Left>
                <Img src={Logo}></Img>
                <A href="/services"><P>Services</P></A>
                <A href="/works"><P>Works</P></A>
                <A href="/news"><P>News</P></A>
                <A href=""><P>Contacts</P></A>
            </Left>
            <Right id="contacts">
                <Contact action='Call us' where='(405) 555-0128' svg={Phone} />
                <Contact action='Talk to us' where='hello@createx.com' svg={Chat} />
            </Right>
        </HeaderContainer>
    )
}

export default Header