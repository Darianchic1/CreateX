import styled from 'styled-components'
import BG from '../assets/images/bg-image.png'
import Button_circle from '../components/Button_circle/Button_circle'
import Usual from '../assets/images/Usual.svg'
import Slider_txt from '../components/Slider_txt'
import Line from '../components/Lines'

function Slider() {
    const Bg = styled.img`
    width: 100%;
    margin-top: 7%;
    position: relative;
`

    const SliderText = styled.div`
    position: absolute;
    top: 10%;
    left: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10%;
`
    const Lines = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 80%;
    left:20%;
    gap: 90%;
`

    return (
        <div>
            <div>
                <Bg src={BG}></Bg>
                <SliderText>
                    <Button_circle type='Usual' svg={Usual} ></Button_circle>
                    <Slider_txt />
                    <Button_circle side='right_str' type='Usual' svg={Usual} ></Button_circle>
                </SliderText>
                <Lines>
                    <Line number='01' />
                    <Line number='02' />
                    <Line number='03' />
                    <Line number='04' />
                </Lines>
            </div>
        </div>
    )
}

export default Slider