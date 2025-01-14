import styled from 'styled-components'
import Button_sq from './Button_sq/Button_sq'

const Input_div = styled.div`
        display: flex;
        flex-direction: column;
        gap: 7px;
    `
const Inputs = styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px
    `
const Label = styled.div`
    font-size: 12px
`
const Input = styled.input`
    height: 25px;
    box-size: border-box;
    padding-left: 15px;
    background-color: #F4F5F6;
    border-weight: 0.5px;
    border-style: solid;
    border-radius: 5px;
    border-color: #D7DADD;
    color: #9A9CA5;
    font-size: 12px;
`

const Checkbox = styled.input`
    accent-color: #FF5A30;
`

const Checkbox_div = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: start;
`

const P = styled.p`
    font-size: 12px;
    margin-top: -0.5%;
`
const Forma = styled.form`
    background-color: white;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    width: 23%;
    position: absolute;
    top: 10%;
    right: 10%;
`

function Form() {
    return (
        <Forma>
            <h3>A quick way to discuss details</h3>
            <Inputs>
                <Input_div>
                    <Label htmlFor='name'>Name*</Label>
                    <Input id="phone" type="text" placeholder="Your phone number"></Input>
                </Input_div>
                <Input_div>
                    <Label htmlFor='phone'>Phone*</Label>
                    <Input id="phone" type="text" placeholder="Your phone number"></Input>
                </Input_div>
                <Input_div>
                    <Label htmlFor='email'>Email*</Label>
                    <Input id="email" type="text" placeholder="Your working email"></Input>
                </Input_div>
                <Input_div>
                    <Label htmlFor='message'>Message*</Label>
                    <Input id="message" type="text" placeholder="Your message"></Input>
                </Input_div>
                <Checkbox_div>
                    <Checkbox id="agreement" type="checkbox"></Checkbox>
                    <P>I agree to receive communications from Createx Construction Bureau.</P>
                </Checkbox_div>
                <Button_sq action='SEND REQUEST' type='Accent_sq'></Button_sq>
            </Inputs>
        </Forma>
    )
}

export default Form