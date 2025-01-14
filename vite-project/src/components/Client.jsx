import styled from 'styled-components'
import Button_circle from './Button_circle/Button_circle'
import Usual from "../assets/images/Usual.svg";

function Client(props) {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: #F4F5F6;
        gap: 5%;
        width: 45%
    `

    const With_button = styled.div`
        margin-top: -5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    `

    const Buttons = styled.div`
        
    `

    const Img = styled.img`
        border-radius: 100%;
        width: 10%;
    `

    const P = styled.p`
        font-size: 16px;
        color: #424551;
    `

    const H2 = styled.p`
        font-size: 16px;
        color: #424551;
       font-weight: bold;
    `

    const P_little = styled.p`
        font-size: 14px;
        color: #787A80;
    `

    return (
        <Container>
            <Img src={props.img}></Img>
            <P>{props.review}</P>
            <H2>{props.name}</H2>
            <With_button>
                <P_little>{props.position}, {props.company}</P_little>
                <Buttons>
                    <Button_circle type="Grey" svg={Usual}></Button_circle>
                    <Button_circle type="Grey" svg={Usual} side='right_str'></Button_circle>
                </Buttons>
            </With_button>
        </Container>
    )
}

export default Client