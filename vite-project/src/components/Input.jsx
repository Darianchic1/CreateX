import styled from 'styled-components'

function Input({ width, placeholder, id }){

    const Input = styled.input`
        box-size: border-box;
        width: ${props => props.width}px;
        padding-left: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: #F4F5F6;
        border-weight: 0.5px;
        border-style: solid;
        border-radius: 5px;
        border-color: #D7DADD;
        color: #9A9CA5;
        font-size: 12px;
    `

    return(
        <Input width={width} placeholder={placeholder} id={id} type="text"></Input>
    )
}

export default Input