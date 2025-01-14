import styled from 'styled-components'

const Service_div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-top: 25%;
    padding-bottom: 25%;
    box-shadow: 0 14px 14px rgba(0, 0, 0, 0.2);
`

const P = styled.p`
    font-size: 20px;
    color: #1E212C;
    font-weight: bold;
`

const Img = styled.img`
    width: 48px;
    height: 48px;
`

function Service(props) {
    return (
        <Service_div>
            <Img src={props.svg}></Img>
            <P>{props.name_service}</P>
        </Service_div>
    )
}

export default Service