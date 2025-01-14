import styled from 'styled-components'

function Contact(props) {
    const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`

const Action = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 0px;
`

const Adress = styled.p`
    font-size: 18px;
    margin-top: 0px;
`

    return (
        <Container>
            <Icon src={props.svg} />
            <Text>
                <Action>{props.action}</Action>
                <Adress className='adress'>{props.where}</Adress>
            </Text>
        </Container>
    )
}

export default Contact