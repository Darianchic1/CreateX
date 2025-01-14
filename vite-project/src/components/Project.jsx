import styled from 'styled-components'

function Project(props) {
    const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 14px 14px rgba(0, 0, 0, 0.2);
    margin-bottom: 10%;
    background-color: white;
`

    const Img = styled.img`
    position: relative;
    width: 100%;
`

    const Text = styled.div`
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 0.5;
    text-align: center;
`

    const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #1E212C;
`

    const Discription = styled.p`
    font-size: 14px;
    color: #787A80;
`

    return (
        <ProjectContainer>
            <Img src={props.img}></Img>
            <Text>
                <Name>{props.article}</Name>
                <Discription>{props.disc}</Discription>
            </Text>
        </ProjectContainer>
    )
}

export default Project