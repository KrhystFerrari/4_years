import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import AnniversaryPage from './components/AnniversaryPage'

function App() {
  const [showAnniversary, setShowAnniversary] = useState(false)

  const handleEnterSurprise = () => {
    setShowAnniversary(true)
  }

  return (
    <AnimatePresence mode="wait">
      {!showAnniversary ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)"
          }}
          transition={{ duration: 1 }}
        >
          <LandingPage onEnter={handleEnterSurprise} />
        </motion.div>
      ) : (
        <motion.div
          key="anniversary"
          initial={{ 
            opacity: 0,
            scale: 1.2,
            filter: "blur(10px)"
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut"
          }}
        >
          <AnniversaryPage />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
