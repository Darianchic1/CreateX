import styled from 'styled-components'

function Line(props) {
    const Number = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: white;
`

    const Line = styled.hr`
    color: #ffffff;
    width: 400%;
`
    return (
        <div>
            <Number>{props.number}</Number>
            <Line></Line>
        </div>
    )
}

export default Line