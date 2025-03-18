import React from 'react'
import styled from 'styled-components'
import { mockVideos } from '../data/mockVideos'
import VideoPlayer from '../components/VideoPlayer'

function Home() {
  return (
    <HomeContainer>
      <FeedContainer>
        {mockVideos.map(video => (
          <VideoPlayer key={video.id} video={video} />
        ))}
      </FeedContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`

const FeedContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  
  > * {
    scroll-snap-align: start;
  }
`

export default Home
