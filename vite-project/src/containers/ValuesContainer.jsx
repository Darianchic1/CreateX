import styled from 'styled-components'
import Value from "../components/Value";
import Like from "../assets/images/ic-like.svg";
import Hand from '../assets/images/ic-hand.svg'
import Comfort from '../assets/images/ic-slippers.svg'
import SendContacts from "../components/SendContacts";

function Values() {
  const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin-bottom: 10%;
    padding-left: 5%;
    padding-right: 5%;
    background-color: white;
    position: relative;
`
  const Article = styled.p`
    font-size: 46px;
    font-weight: bold;
    color: #1E212C;
    margin-bottom: 0px;
`
  const Mission = styled.p`
    font-size: 18px;
    color: #787A80;
`

  const Values = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

  const VertLine = styled.div`
    width: 1px;
    background: linear-gradient(to bottom, rgb(218, 219, 221, 0),rgb(218, 219, 221, 0.5), rgb(218, 219, 221, 1), rgb(218, 219, 221, 0.5), rgb(218, 219, 221, 0));
`

  return (
    <ValuesContainer>
      <Article>Our core values</Article>
      <Mission>
        Our mission is to set the highest standards for construction sphere.
      </Mission>
      <Values>
        <Value
          svg={Like}
          name_value="Quality"
          discr_value="Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."
        />
        <VertLine></VertLine>
        <Value
          svg={Hand}
          name_value="Safety"
          discr_value="Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."
        />
        <VertLine></VertLine>
        <Value
          svg={Comfort}
          name_value="Comfort"
          discr_value="Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."
        />
      </Values>
      <SendContacts />
    </ValuesContainer>
  );
}

export default Values;
