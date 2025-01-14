import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import Youtube_button from '../assets/images/large';
import styled from 'styled-components'

const VideoContainer = () => {
  const playerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
      setIsVisible(false);
    }
  };

  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0, // Автоигра по умолчанию отключена
    },
  };

  const Btn = styled.div`
    position:  absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    backgroundColor: rgba(255, 255, 255, 0.8);
    border: none
    borderRadius: '100px';
    cursor: pointer;
  `

  const Container = styled.div`
    position: relative;
  `

  const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 5%;
  `

  const H1 = styled.div`
    font-size: 46px;
    font-weight: bold;
  `

  const P = styled.div`
    font-size: 18px;
    margin-bottom: 3%;
  `



  return (
    <Page id="video">
        <H1>We are Createx Construction Bureau </H1>
        <P>We are rightfully considered to be the best construction company in the USA.</P>
        <Container>
        <YouTube
            videoId="7KmwBCiGzo0?si=OAVIKWXJc_NLKL4F" // Замените на ID вашего видео
            opts={videoOptions}
            ref={playerRef}
            /*style={style}*/
        />
        {isVisible &&<Btn onClick={handlePlay}>
            <Youtube_button />
        </Btn>}
        </Container>
    </Page>
  );
};

export default VideoContainer;
