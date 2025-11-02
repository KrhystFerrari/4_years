import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LandingPageProps {
  onEnter: () => void
}

function LandingPage({ onEnter }: LandingPageProps) {
  const [mounted, setMounted] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Show button after animations
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 3000)
    
    // Create floating sparkles
    const createSparkle = () => {
      const sparkle = document.createElement('div')
      sparkle.innerHTML = '✨'
      sparkle.className = 'floating-sparkle'
      sparkle.style.left = Math.random() * 100 + '%'
      sparkle.style.fontSize = Math.random() * 15 + 10 + 'px'
      sparkle.style.animationDuration = Math.random() * 6 + 4 + 's'
      sparkle.style.animationDelay = Math.random() * 3 + 's'
      
      const container = document.querySelector('.sparkles-container')
      if (container) {
        container.appendChild(sparkle)
        
        setTimeout(() => {
          sparkle.remove()
        }, 10000)
      }
    }
    
    // Create sparkles periodically
    const interval = setInterval(createSparkle, 800)
    
    // Initial sparkles
    for (let i = 0; i < 8; i++) {
      setTimeout(createSparkle, i * 300)
    }
    
    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="landing-page">
      {/* Sparkles background */}
      <div className="sparkles-container"></div>
      
      <div className="landing-container">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="landing-header"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="gift-icon"
          >
            🎁
          </motion.div>
          
          <h1 className="landing-title">
            Para o meu Xuxu!
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="landing-subtitle"
          >
            Um presente especial está esperando por você...
          </motion.p>
        </motion.div>

        {/* Romantic Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="landing-message"
        >
          <div className="message-card">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="heart-ring"
            >
              💕
            </motion.div>
            
            <p className="message-text">
              "Hoje marca mais um ano da nossa jornada juntos.
              Prepare seu coração para uma surpresa feita com muito amor..."
            </p>
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="date-highlight"
            >
              ✨ 02 de Novembro, 2025 ✨
            </motion.div>
          </div>
        </motion.div>

        {/* Enter Button */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="enter-button-container"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(244, 63, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter}
              className="enter-button"
            >
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Abrir Meu Presente 💝
              </motion.span>
            </motion.button>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="click-hint"
            >
              Clique para revelar sua surpresa...
            </motion.p>
          </motion.div>
        )}

        {/* Floating Hearts Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="floating-hearts-ring"
        >
          <div className="heart h1">💖</div>
          <div className="heart h2">💕</div>
          <div className="heart h3">💝</div>
          <div className="heart h4">💗</div>
          <div className="heart h5">💓</div>
          <div className="heart h6">💞</div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage