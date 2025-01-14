import styled from 'styled-components'

function StaticRound(props){
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

    const Round = styled.div`
    height: 130px;
    width: 130px;
    border: 6px solid ${props.borderColor};
    border-radius: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center;
    `

    const H1 = styled.p`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    vertical-align: baseline;
    `

    const P = styled.p`
    font-size: 14px;
    `

    return(
        <div>
        <Container>
            <Round>
                <H1>{props.number}</H1>
            </Round>
            <P>{props.designation}</P>
        </Container>
        
        </div>
    )
}

export default StaticRound