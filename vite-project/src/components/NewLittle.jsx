import styled from 'styled-components'
import Div from '../assets/images/divider.svg'
import Chat_img from '../assets/images/Chat_white.svg'

function NewLittle(props) {
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
    width: 100%;
    box-shadow: 0 14px 14px rgba(0, 0, 0, 0.2);
`

    const Img = styled.img`
    width: 100%;
`

    const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 3%;
`

    const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #1E212C;
    cursor: pointer; 
    transition: background-color 0.3s; 

    &:hover {
        color: #FF5A30; 
    }
`

    const Info = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 3%;
`

    const P = styled.p`
    font-size: 14px;
    color: #787A80;
`

    const Chat_number = styled.div`
    display: flex;
    flex-dirextion: row;
`

    const Description = styled.p`
    font-size: 16px;
    color: #424551;
`

    return (
        <Container>
            <Img src={props.img}></Img>
            <Text>
                <Title>{props.title}</Title>
                <Info>
                    <P>{props.section}</P>
                    <img src={Div}></img>
                    <P>{props.month} {props.day}, {props.year}</P>
                    <img src={Div}></img>
                    <Chat_number>
                        <img src={Chat_img}></img>
                        <P>   {props.comments} comments</P>
                    </Chat_number>
                </Info>
            </Text>
        </Container>
    )
}

export default NewLittle