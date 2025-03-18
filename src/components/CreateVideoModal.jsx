import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMusic, FaHashtag, FaVideo, FaTimesCircle } from 'react-icons/fa'

function CreateVideoModal({ onClose }) {
  const [selectedEffect, setSelectedEffect] = useState(null)

  const videoEffects = [
    { id: 1, name: 'Trending', icon: <FaHashtag /> },
    { id: 2, name: 'Music', icon: <FaMusic /> },
    { id: 3, name: 'Green Screen', icon: <FaVideo /> }
  ]

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <FaTimesCircle />
          </CloseButton>
          <Title>Create TikTok</Title>
        </ModalHeader>

        <UploadSection>
          <UploadButton>
            <FaVideo />
            <span>Upload Video</span>
          </UploadButton>
        </UploadSection>

        <EffectsSection>
          <SectionTitle>Add Effects</SectionTitle>
          <EffectsList>
            {videoEffects.map(effect => (
              <EffectItem 
                key={effect.id}
                active={selectedEffect === effect.id}
                onClick={() => setSelectedEffect(effect.id)}
              >
                {effect.icon}
                <span>{effect.name}</span>
              </EffectItem>
            ))}
          </EffectsList>
        </EffectsSection>

        <SubmitButton>Next</SubmitButton>
      </ModalContainer>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  background-color: var(--secondary-bg);
  width: 90%;
  max-width: 400px;
  border-radius: 16px;
  padding: var(--spacing-lg);
  color: var(--text-primary);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: var(--spacing-lg);
`

const CloseButton = styled.button`
  position: absolute;
  left: 0;
  color: var(--text-primary);
  font-size: var(--font-size-lg);
`

const Title = styled.h2`
  text-align: center;
`

const UploadSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
`

const UploadButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--interaction-bg);
  padding: var(--spacing-lg);
  border-radius: 8px;
  color: var(--text-primary);

  svg {
    font-size: 48px;
    margin-bottom: var(--spacing-md);
  }
`

const EffectsSection = styled.div`
  margin-bottom: var(--spacing-lg);
`

const SectionTitle = styled.h3`
  margin-bottom: var(--spacing-md);
`

const EffectsList = styled.div`
  display: flex;
  justify-content: space-between;
`

const EffectItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.active 
    ? 'var(--accent-color)' 
    : 'var(--interaction-bg)'};
  color: var(--text-primary);
  padding: var(--spacing-md);
  border-radius: 8px;
  width: 30%;

  svg {
    font-size: 24px;
    margin-bottom: var(--spacing-sm);
  }
`

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--accent-color);
  color: white;
  padding: var(--spacing-md);
  border-radius: 8px;
  font-weight: bold;
`

export default CreateVideoModal
