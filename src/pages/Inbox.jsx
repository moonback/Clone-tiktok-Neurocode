import React, { useState } from 'react'
import styled from 'styled-components'
import { FaComment, FaHeart, FaBell, FaUserFriends } from 'react-icons/fa'

function Inbox() {
  const [activeTab, setActiveTab] = useState('messages')

  const messages = [
    {
      id: 1,
      user: '@dancequeen',
      avatar: 'https://i.pravatar.cc/150?u=dancer',
      lastMessage: 'Hey, loved your last video!',
      time: '2h',
      unread: true
    },
    {
      id: 2,
      user: '@comedyking',
      avatar: 'https://i.pravatar.cc/150?u=comedian',
      lastMessage: 'Collaboration?',
      time: '1d',
      unread: false
    }
  ]

  const notifications = [
    {
      id: 1,
      type: 'like',
      user: '@musicstar',
      message: 'liked your video',
      time: '3h'
    },
    {
      id: 2,
      type: 'follow',
      user: '@travelguru',
      message: 'started following you',
      time: '1d'
    }
  ]

  return (
    <InboxContainer>
      <Header>
        <TabNavigation>
          <Tab 
            active={activeTab === 'messages'}
            onClick={() => setActiveTab('messages')}
          >
            <FaComment /> Messages
          </Tab>
          <Tab 
            active={activeTab === 'notifications'}
            onClick={() => setActiveTab('notifications')}
          >
            <FaBell /> Notifications
          </Tab>
        </TabNavigation>
      </Header>

      <ContentSection>
        {activeTab === 'messages' && (
          <MessageList>
            {messages.map(msg => (
              <MessageItem key={msg.id} unread={msg.unread}>
                <Avatar src={msg.avatar} alt={msg.user} />
                <MessageDetails>
                  <UserName>{msg.user}</UserName>
                  <LastMessage>{msg.lastMessage}</LastMessage>
                </MessageDetails>
                <MessageTime>{msg.time}</MessageTime>
              </MessageItem>
            ))}
          </MessageList>
        )}

        {activeTab === 'notifications' && (
          <NotificationList>
            {notifications.map(notification => (
              <NotificationItem key={notification.id}>
                <NotificationIcon>
                  {notification.type === 'like' ? <FaHeart color="#fe2c55" /> : <FaUserFriends color="#4facfe" />}
                </NotificationIcon>
                <NotificationDetails>
                  <NotificationText>
                    <strong>{notification.user}</strong> {notification.message}
                  </NotificationText>
                  <NotificationTime>{notification.time}</NotificationTime>
                </NotificationDetails>
              </NotificationItem>
            ))}
          </NotificationList>
        )}
      </ContentSection>
    </InboxContainer>
  )
}

const InboxContainer = styled.div`
  background-color: var(--primary-bg);
  height: 100vh;
  color: var(--text-primary);
  padding: var(--spacing-md);
`

const Header = styled.div`
  margin-bottom: var(--spacing-lg);
`

const TabNavigation = styled.div`
  display: flex;
  justify-content: space-around;
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

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
`

const MessageItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.unread ? 'var(--secondary-bg)' : 'transparent'};
  padding: var(--spacing-md);
  border-radius: 8px;
  margin-bottom: var(--spacing-sm);
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: var(--spacing-md);
`

const MessageDetails = styled.div`
  flex-grow: 1;
`

const UserName = styled.div`
  font-weight: bold;
`

const LastMessage = styled.div`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`

const MessageTime = styled.div`
  color: var(--text-secondary);
  font-size: var(--font-size-xs);
`

const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
`

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--secondary-bg);
  padding: var(--spacing-md);
  border-radius: 8px;
  margin-bottom: var(--spacing-sm);
`

const NotificationIcon = styled.div`
  margin-right: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: rgba(254, 44, 85, 0.1);
  border-radius: 50%;
`

const NotificationDetails = styled.div`
  flex-grow: 1;
`

const NotificationText = styled.div`
  font-size: var(--font-size-sm);
`

const NotificationTime = styled.div`
  color: var(--text-secondary);
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-xs);
`

export default Inbox
