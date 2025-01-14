import BG_form from '../assets/images/form_bg.jpg'
import Form from '../components/Form'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
`

const Bg = styled.img`
    width: 100%;
`

function Form_page() {
    return (
        <Container>
            <Bg src={BG_form}></Bg>
            <Form />
        </Container>
    )
}

export default Form_page