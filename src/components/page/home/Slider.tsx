import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import banner1 from '../../../../public/banner-image-1.jpg.webp'
import banner2 from '../../../../public/banner-image-2.jpg.webp'
import banner3 from '../../../../public/banner-img-3.jpg.webp'

const slides = [
  {
    id: 1,
    title: 'Where',
    highlight: 'Marketing',
    subtitle: 'Meets',
    accent: 'Tech',
    image: banner1,
  },
  {
    id: 2,
    title: "Let's",
    highlight: 'Jumpstart',
    subtitle: 'Your Digital',
    accent: 'Growth!',
    image: banner2,
  },
  {
    id: 3,
    title: "Digital",
    highlight: 'Marketing',
    subtitle: 'That Goes',
    accent: 'Beyond Rankings',
    image: banner3,
  },
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="  min-h-screen text-white overflow-hidden ">
      
  
    <AnimatePresence>
          {slides.map((slide, index) => (
            currentSlide === index && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                 transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"  />
                  <div className="absolute inset-0  flex  container mx-auto items-center ">
                    <div className="text-start font-serif text-6xl md:text-8xl">
                      <h1 className=" ">
                        {slide.title}{' '}
                      </h1>
                      <h2 >
                        <span className="text-orange-500">{slide.highlight}</span>
                      </h2>
                      <h3 >
                        {slide.subtitle}{' '}
                        
                      </h3>
                      <h4 >
                      <span className="text-orange-500">{slide.accent}</span>
                        
                      </h4>
                     
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
     
      </div>
  )
}

export default Slider