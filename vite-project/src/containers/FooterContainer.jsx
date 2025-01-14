import styled from 'styled-components'
import Logo from '../assets/images/logo_white.svg'
import WhatsApp from '../assets/images/Whatsapp.svg'
import Messanger from '../assets/images/Messanger.svg'
import Facebook from '../assets/images/Facebook.svg'
import Twitter from '../assets/images/Twitter.svg'
import YouTube from '../assets/images/YouTube.svg'
import Button_sq from '../components/Button_sq/Button_sq'
import UpLine from '../assets/images/UpLine.svg'
import Heart from '../assets/images/Heart.svg'

function FooterContainer() {

    const Container = styled.div`
    margin-top: -1%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 3%;
    padding-bottom: 2%;
    background-color: #1E212C;
`

    const Up = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15%;
    width: 100%;
`

    const UpLeft = styled.div`
     width: 45%;
`

    const UpRight = styled.div`
    width: 45%;
    
`

    const Images = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20%;
`

    const Networks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    width: 80%;
`
    const Description = styled.p`
    font-size: 14px;
    color: #B0B1B5;
`

    const H1 = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
`

    const H2 = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
`

    const B = styled.b`
    font-size: 16px;
    color: #FFFFFF;
`

    const A = styled.a`
    font-size: 16px;
    color: #B0B1B5;
    transition: background-color 0.5s;
    cursor: pointer; 

    &:hover {
        color: #FF5A30; 
    }
`

    const Form = styled.div`
    display: flex;
    flex-direction: row;
`

    const Input = styled.input`
    background-color: #383C46;
    color: #B0B1B5;
    border: 1px solid #B0B1B5;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right-style: none;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 40%;
`

    const Exp = styled.p`
    font-size: 12px;
    color: #B0B1B5;
`

    const Down = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    gap: 10%;
`

    const DownLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

    const DownMiddle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

    const DownRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

    const GoTop = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    width: 16%;
    align-items: end;
`

    const Text = styled.p`
    font-size: 14px;
    color: #FFFFFF;
`

    const LittleText = styled.p`
    font-size: 12px;
    color: #FFFFFF;
`

    const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

    const Signature = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 10%;
    align-items: end;
`

    return (
        <Container>
            <Up>
                <UpLeft>
                    <Images>
                        <img src={Logo}></img>
                        <Networks>
                            <img src={WhatsApp}></img>
                            <img src={Messanger}></img>
                            <img src={Facebook}></img>
                            <img src={Twitter}></img>
                            <img src={YouTube}></img>
                        </Networks>
                    </Images>
                    <Description>
                        Createx Construction Bureau has been successfully operating in the USA construction market since 2000.
                        We are proud to offer you quality construction and exemplary service.
                        Our mission is to set the highest standards for construction sphere.
                    </Description>
                </UpLeft>
                <UpRight>
                    <H1>Let’s stay in touch</H1>
                    <Form>
                        <Input placeholder="Your email address"></Input>
                        <Button_sq type="Accent_sq" action="SUBSCRIBE"></Button_sq>
                    </Form>
                    <Exp>*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</Exp>
                </UpRight>
            </Up>
            <Down>
                <DownLeft>
                    <H2>HEAD OFFICE</H2>
                    <A target="_blank" href="https://www.google.com/maps/place/%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%A8%D0%90/data=!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62?sa=X&ved=1t:242&ictx=111"><B>Address: </B>8502 Preston Rd. Inglewood, New York</A>
                    <A><B>Call: </B>(405) 555-0128</A>
                    <A target="_blank" href="https://workspace.google.com/intl/ru/gmail/"><B>Email: </B>hello@createx.com</A>
                </DownLeft>
                <DownMiddle>
                    <H2>WHO WE ARE</H2>
                    <A href="#video">About Us</A>
                    <A href="">Available Positions</A>
                    <A href="#contacts">Contacts</A>
                </DownMiddle>
                <DownRight>
                    <H2>OUR EXPERIENCE</H2>
                    <A href="#services">Services</A>
                    <A href="#projects">Work</A>
                    <A href="#news">News</A>
                </DownRight>
            </Down>
            <Signature>
                <Author>
                    <LittleText>© All rights reserved. Made with</LittleText>
                    <img src={Heart}></img>
                    <LittleText>by Daria Ivanova</LittleText>
                </Author>
                <GoTop>
                    <Text>GO TO TOP</Text>
                    <a href="#contacts"><Button_sq type="Accent_sq" action={<img src={UpLine}></img>}></Button_sq></a>
                </GoTop>
            </Signature>
        </Container>
    )
}

export default FooterContainer