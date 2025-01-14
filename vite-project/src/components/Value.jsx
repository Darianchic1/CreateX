import styled from 'styled-components'

function Value(props) {
    const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 0px;
    margin-top: 4%;
    width: 23%;
`

const Img = styled.img`
    width: 48px;
    height: 48px;
`

const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #1E212C;
    margin-bottom: 0px;
    margin-top: 8%;
`

const Discription = styled.p`
    font-size: 16px;
    color: #787A80;
`

    return (
        <ValueContainer>
            <Img src={props.svg}></Img>
            <Name className="name_value">{props.name_value}</Name>
            <Discription>{props.discr_value}</Discription>
        </ValueContainer>
    )
}

export default Value