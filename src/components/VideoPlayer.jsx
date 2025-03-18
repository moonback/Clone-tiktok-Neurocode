import React, { useRef } from 'react'
import styled from 'styled-components'
import { 
  FaHeart, 
  FaComment, 
  FaShare, 
  FaVolumeUp, 
  FaVolumeMute 
} from 'react-icons/fa'
import { useVideoInteraction } from '../hooks/useVideoInteraction'

function VideoPlayer({ video }) {
  const videoRef = useRef(null)
  const {
    isPlaying,
    isMuted,
    likes,
    togglePlay,
    toggleMute,
    handleLike
  } = useVideoInteraction()

  return (
    <VideoContainer>
      <video 
        ref={videoRef}
        src={video.videoUrl} 
        loop 
        muted={isMuted}
        onClick={() => togglePlay(videoRef)}
      />
      
      <VideoOverlay>
        <UserInfo>
          <ProfilePic src={video.userAvatar} alt={video.user} />
          <Username>{video.user}</Username>
        </UserInfo>
        
        <Description>{video.description}</Description>
        
        <InteractionControls>
          <MuteButton onClick={(e) => {
            e.stopPropagation()
            toggleMute(videoRef)
          }}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </MuteButton>
          
          <InteractionButtons>
            <InteractionButton 
              onClick={(e) => {
                e.stopPropagation()
                handleLike(video.likes)
              }}
            >
              <FaHeart color={likes > video.likes ? 'red' : 'white'} />
              <span>{likes || video.likes}</span>
            </InteractionButton>
            
            <InteractionButton>
              <FaComment />
              <span>{video.comments}</span>
            </InteractionButton>
            
            <InteractionButton>
              <FaShare />
              <span>Share</span>
            </InteractionButton>
          </InteractionButtons>
        </InteractionControls>
      </VideoOverlay>
    </VideoContainer>
  )
}

const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const VideoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

const Username = styled.div`
  font-weight: bold;
`

const Description = styled.div`
  margin-bottom: 15px;
`

const InteractionControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MuteButton = styled.button`
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InteractionButtons = styled.div`
  display: flex;
  gap: 20px;
`

const InteractionButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 24px;
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
  }
`

export default VideoPlayer
