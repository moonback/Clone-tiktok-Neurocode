import { useState } from 'react'

export function useVideoInteraction() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [likes, setLikes] = useState(0)

  const togglePlay = (videoRef) => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleLike = (currentLikes) => {
    setLikes(prevLikes => 
      prevLikes === currentLikes 
        ? currentLikes + 1 
        : currentLikes
    )
  }

  return {
    isPlaying,
    isMuted,
    likes,
    togglePlay,
    toggleMute,
    handleLike
  }
}
