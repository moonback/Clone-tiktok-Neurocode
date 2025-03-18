import React, { useState } from 'react'
import styled from 'styled-components'
import { FaHashtag, FaMusic, FaFire } from 'react-icons/fa'

function Discover() {
  const [activeTab, setActiveTab] = useState('hashtags')

  const trendingHashtags = [
    '#foryou', '#trending', '#comedy', '#dance', 
    '#music', '#viral', '#challenge'
  ]

  const trendingCreators = [
    { name: '@dancequeen', followers: '2.5M' },
    { name: '@comedyking', followers: '1.8M' },
    { name: '@musicstar', followers: '3.2M' }
  ]

  return (
    <DiscoverContainer>
      <Header>
        <SearchBar placeholder="Search TikTok" />
      </Header>

      <TabNavigation>
        <Tab 
          active={activeTab === 'hashtags'}
          onClick={() => setActiveTab('hashtags')}
        >
          <FaHashtag /> Hashtags
        </Tab>
        <Tab 
          active={activeTab === 'creators'}
          onClick={() => setActiveTab('creators')}
        >
          <FaFire /> Creators
        </Tab>
        <Tab 
          active={activeTab === 'sounds'}
          onClick={() => setActiveTab('sounds')}
        >
          <FaMusic /> Sounds
        </Tab>
      </TabNavigation>

      <ContentSection>
        {activeTab === 'hashtags' && (
          <HashtagList>
            {trendingHashtags.map(tag => (
              <HashtagItem key={tag}>
                {tag}
                <span>1.5M views</span>
              </HashtagItem>
            ))}
          </HashtagList>
        )}

        {activeTab === 'creators' && (
          <CreatorList>
            {trendingCreators.map(creator => (
              <CreatorItem key={creator.name}>
                <CreatorAvatar 
                  src={`https://i.pravatar.cc/150?u=${creator.name}`} 
                  alt={creator.name} 
                />
                <CreatorDetails>
                  <h3>{creator.name}</h3>
                  <p>{creator.followers} Followers</p>
                </CreatorDetails>
                <FollowButton>Follow</FollowButton>
              </CreatorItem>
            ))}
          </CreatorList>
        )}
      </ContentSection>
    </DiscoverContainer>
  )
}

const DiscoverContainer = styled.div`
  background-color: var(--primary-bg);
  height: 100vh;
  color: var(--text-primary);
  padding: var(--spacing-md);
`

const Header = styled.div`
  margin-bottom: var(--spacing-lg);
`

const SearchBar = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  background-color: var(--secondary-bg);
  border: none;
  border-radius: 8px;
  color: var(--text-primary);
`

const TabNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
`

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-secondary)'};
  font-weight: bold;
  padding: var(--spacing-sm);
  border-bottom: 2px solid ${props => props.active ? 'var(--accent-color)' : 'transparent'};
`

const ContentSection = styled.div`
  overflow-y: auto;
  height: calc(100vh - 200px);
`

const HashtagList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
`

const HashtagItem = styled.div`
  background-color: var(--secondary-bg);
  padding: var(--spacing-md);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  span {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    margin-top: var(--spacing-xs);
  }
`

const CreatorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`

const CreatorItem = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--secondary-bg);
  padding: var(--spacing-md);
  border-radius: 8px;
`

const CreatorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: var(--spacing-md);
`

const CreatorDetails = styled.div`
  flex-grow: 1;

  h3 {
    margin-bottom: var(--spacing-xs);
  }

  p {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
  }
`

const FollowButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
`

export default Discover
