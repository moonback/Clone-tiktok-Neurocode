import React, { useState } from 'react'
import styled from 'styled-components'
import { 
  FaUserEdit, 
  FaCog, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok 
} from 'react-icons/fa'

function Profile() {
  const [activeTab, setActiveTab] = useState('videos')

  const userVideos = [
    { id: 1, thumbnail: 'https://picsum.photos/200/300?random=1' },
    { id: 2, thumbnail: 'https://picsum.photos/200/300?random=2' },
    { id: 3, thumbnail: 'https://picsum.photos/200/300?random=3' },
    { id: 4, thumbnail: 'https://picsum.photos/200/300?random=4' },
    { id: 5, thumbnail: 'https://picsum.photos/200/300?random=5' },
    { id: 6, thumbnail: 'https://picsum.photos/200/300?random=6' }
  ]

  return (
    <ProfileContainer>
      <Header>
        <HeaderActions>
          <FaUserEdit />
          <FaCog />
        </HeaderActions>
      </Header>

      <ProfileInfo>
        <ProfileAvatar src="https://i.pravatar.cc/150?u=profile" alt="Profile" />
        <UserName>@tiktokstar</UserName>
        <UserStats>
          <Stat>
            <strong>1.2M</strong>
            <span>Followers</span>
          </Stat>
          <Stat>
            <strong>500K</strong>
            <span>Following</span>
          </Stat>
          <Stat>
            <strong>25M</strong>
            <span>Likes</span>
          </Stat>
        </UserStats>
        <BioText>Creative content creator | Spreading joy one video at a time 🌈</BioText>
        
        <SocialLinks>
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
          <SocialIcon href="#"><FaYoutube /></SocialIcon>
          <SocialIcon href="#"><FaTiktok /></SocialIcon>
        </SocialLinks>

        <ActionButtons>
          <EditProfileButton>Edit Profile</EditProfileButton>
          <ShareProfileButton>Share Profile</ShareProfileButton>
        </ActionButtons>
      </ProfileInfo>

      <TabNavigation>
        <Tab 
          active={activeTab === 'videos'}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </Tab>
        <Tab 
          active={activeTab === 'liked'}
          onClick={() => setActiveTab('liked')}
        >
          Liked
        </Tab>
      </TabNavigation>

      <ContentGrid>
        {userVideos.map(video => (
          <VideoThumbnail 
            key={video.id} 
            src={video.thumbnail} 
            alt={`Video ${video.id}`} 
          />
        ))}
      </ContentGrid>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  background-color: var(--primary-bg);
  color: var(--text-primary);
  height: 100vh;
  overflow-y: auto;
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-md);
`

const HeaderActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  color: var(--text-primary);
  font-size: var(--font-size-lg);
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-md);
`

const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--accent-color);
  margin-bottom: var(--spacing-md);
`

const UserName = styled.h2`
  margin-bottom: var(--spacing-sm);
`

const UserStats = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: var(--font-size-md);
  }

  span {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
  }
`

const BioText = styled.p`
  color: var(--text-secondary);
  max-width: 300px;
  margin-bottom: var(--spacing-md);
`

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`

const SocialIcon = styled.a`
  color: var(--text-primary);
  font-size: var(--font-size-lg);
`

const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
`

const EditProfileButton = styled.button`
  background-color: var(--secondary-bg);
  color: var(--text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
`

const ShareProfileButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
`

const TabNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid var(--border-color);
`

const Tab = styled.button`
  padding: var(--spacing-md);
  color: ${props => props.active ? 'var(--text-primary)' : 'var(--text-secondary)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--accent-color)' : 'transparent'};
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xs);
  padding: var(--spacing-sm);
`

const VideoThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: cover;
`

export default Profile
