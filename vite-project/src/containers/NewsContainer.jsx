import styled from 'styled-components'
import NewBig from '../components/NewBig'
import New1 from '../assets/images/new1.jpg'
import New2 from '../assets/images/new2.jpg'
import New3 from '../assets/images/new3.jpg'
import NewLittle from '../components/NewLittle'
import LearnMore from '../components/LearnMore'

function News() {
    const Container = styled.div`

`
    const News = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    width: 80%;
    margin-left: 10%;
`

    const Little = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

    const H1 = styled.p`
    font-size: 46px;
    font-weight: bold;
    color: #1E212C;
    text-align: center;
`

    const Cent = styled.div`
        margin-left: 30%;
        margin-top: 5%;
    `
    return (
        <Container id="news">
            <H1>Recent news</H1>
            <News>
                <NewBig
                    img={New1}
                    title='How to Build Climate Change-Resilient Infrastructure'
                    section='Industry News'
                    month='June'
                    day='24'
                    year='2020'
                    comments='4'
                    description='Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...' />
                <Little>
                    <NewLittle
                        img={New2}
                        title='How Construction Can Help Itself'
                        section='Innovation'
                        month='June'
                        day='12'
                        year='2020'
                        comments='No' />
                    <NewLittle
                        img={New3}
                        title='Types of Flooring Materials'
                        section='Company News'
                        month='December'
                        day='24'
                        year='2019'
                        comments='No' />
                </Little>
            </News>
            <Cent>
                <LearnMore text="Explore all our news posts" act="View all news" link="/news"/>
            </Cent>
        </Container>
    )
}

export default News