import NavBar from '@/components/NavBar'
import Slider from './Slider'
import Service from './Service'
import CaseStudiesSection from './CaseStudiesSection'
import Client from './Client'
import Footer from './Footer'

const Home = () => {
  return (
   <>
  <NavBar />
   <Slider />
   <Service />
   <CaseStudiesSection />
   <Client />
   <Footer />
   </>
  )
}

export default Home