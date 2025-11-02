import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AkImage from '../assets/AK.png'

function AnniversaryPage() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Create floating hearts
    const createFloatingHeart = () => {
      const heart = document.createElement('div')
      heart.innerHTML = '♥'
      heart.className = 'floating-heart'
      heart.style.left = Math.random() * 100 + '%'
      heart.style.fontSize = Math.random() * 20 + 15 + 'px'
      heart.style.animationDuration = Math.random() * 8 + 8 + 's'
      heart.style.animationDelay = Math.random() * 5 + 's'
      
      const container = document.querySelector('.floating-hearts')
      if (container) {
        container.appendChild(heart)
        
        setTimeout(() => {
          heart.remove()
        }, 16000)
      }
    }
    
    // Create hearts periodically
    const interval = setInterval(createFloatingHeart, 1500)
    
    // Initial hearts
    for (let i = 0; i < 10; i++) {
      setTimeout(createFloatingHeart, i * 500)
    }
    
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div>
      {/* Floating hearts background */}
      <div className="floating-hearts"></div>

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="header"
        >
          <div className="emoji-heart">💕</div>
          <h1 className="title">4 Anos</h1>
          <p className="subtitle">de amor infinito</p>
        </motion.div>

        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="photo-container"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 182, 193, 0.4)"
            }}
            className="photo-frame"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="photo-wrapper"
            >
              <img 
                src={AkImage} 
                alt="Krhys e Carol - 4 anos de amor" 
                className="photo-image"
              />
              <div className="photo-overlay">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="photo-text"
                >
                  <span className="photo-hearts">💕✨💕</span>
                  <p>Nosso Amor</p>
                  <span className="photo-hearts">💕✨💕</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Sparkle effects around the frame */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="sparkle-ring"
            >
              <div className="sparkle sparkle-1">✨</div>
              <div className="sparkle sparkle-2">💖</div>
              <div className="sparkle sparkle-3">✨</div>
              <div className="sparkle sparkle-4">💖</div>
              <div className="sparkle sparkle-5">✨</div>
              <div className="sparkle sparkle-6">💖</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="names-container"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="name-card"
          >
            <h2 className="name">Krhys</h2>
          </motion.div>
          
          <div className="heart-separator">💖</div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="name-card"
          >
            <h2 className="name">Carol</h2>
          </motion.div>
        </motion.div>

        {/* Love Declaration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="declaration-container"
        >
          <div className="declaration-card">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <div className="sparkles">✨</div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="declaration-main"
            >
              "Quatro anos... Quatro anos de sorrisos compartilhados, 
              de sonhos construídos juntos, de amor que cresce a cada dia.
              Você não é só minha namorada, você é minha melhor amiga, 
              minha parceira de vida, meu coração fora do peito."
            </motion.p>
            
            <motion.p
              initial={ { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="declaration-sub"
            >
              Cada momento ao seu lado é uma página especial na nossa história de amor. 
              Obrigado por tornar minha vida mais colorida, mais feliz, mais completa.
              Aqui está para muitos e muitos anos mais! ✨
            </motion.p>
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="date-container"
        >
          <svg className="date-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>02 de Novembro, 2025</span>
          <svg className="date-icon pulse-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </motion.div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="footer"
        >
          <p className="footer-text">
            Feito com muito 💝 para você, meu amor!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AnniversaryPage