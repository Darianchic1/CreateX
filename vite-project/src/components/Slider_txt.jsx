import styled from 'styled-components'
import Button_sq from "./Button_sq/Button_sq";

function Slider_txt() {
  const TextContainer = styled.div`
  width: 51%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 15%;
`

  const Name = styled.p`
  font-weight: bold;
  font-size: 72px;
  color: white;
  line-height: 1.3;
  margin-bottom: 0px;
`

  const Span = styled.span`
  color: #FF5A30;
`

const Discription = styled.p`
  color: white;
  width: 90%;
  font-size: 20px;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3%;
`
  return (
    <TextContainer>
      <Name>
        CREATE<Span>X</Span> CONSTRUCTION
      </Name>
      <Discription>
        Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
        dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
        pellentesque integer ipsum elementum felis.
      </Discription>
      <Buttons>
        <a href="/about"><Button_sq action='LEARN MORE ABOUT US' type='Usual_sq' /></a>
        <Button_sq action='SUBMIT REQUEST' type='Accent_sq' />
      </Buttons>
    </TextContainer>
  );
}

export default Slider_txt;
