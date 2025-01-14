import styled from 'styled-components'
import Input from './Input'
import Button_sq from './Button_sq/Button_sq'

function SendContacts(){

    const Input_div = styled.div`
        display: flex;
        flex-direction: column;
        gap: 7px;
        align-items: start;
    `
    const Label = styled.div`
        font-size: 12px
    `

    const H1 = styled.p`
        font-size: 28px;
        font-weight: bold;
    `

    const Form = styled.form`
        background-color: white;
        padding-left: 50px;
        padding-top: 10px;
        padding-bottom: 50px;
        overflow: visible;
        width: 70%;
        position: absolute;
        top: 105%;
        left: 12%;
        box-shadow: 0px 7px 8px -10px rgba(50, 50, 50, 0.75);
        z-index: 6;
    `
    const With_button = styled.div`
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 5%
    `

    return(
        <Form>
            <H1>Want to know more? Ask us a question:</H1>
            <With_button>
                <Input_div>
                    <Label htmlFor='name'>Name</Label>
                    <Input id="phone" placeholder="Your name" width="200"></Input>
                </Input_div>
                <Input_div>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input id="phone" placeholder="Your phone" width="200"></Input>
                </Input_div>
                <Input_div>
                    <Label htmlFor='email'>Message</Label>
                    <Input id="email" placeholder="Your message" width="250"></Input>
                </Input_div>
                <Button_sq action='SEND' type='Accent_sq'></Button_sq>
            </With_button>
        </Form>
    )
}

export default SendContacts