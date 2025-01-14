import styled from 'styled-components'
import Button_sq from '../components/Button_sq/Button_sq';

function LearnMore(props) {

    const LearnMore = styled.div`
        display: flex;
        flex-direction: row;
        gap: 5%;
        width: 100%;
        align-items: center;
        text-align: right;
    `
    const H2 = styled.p`
        font-size: 28px;
        font-weight: bold;
        color: #1E212C;
    `

    return (
        <LearnMore>
            <H2>{props.text}</H2>
            <a href={props.link}><Button_sq action={props.act} type='Accent_sq'></Button_sq></a>
        </LearnMore>
    )
}

export default LearnMore