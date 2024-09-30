import img from '../../../../public/services.svg'
import imgDot from '../../../../public/service-dot.svg'

const Service = () => {
  return (
    <>
    <section className="bg-white text-black py-20">
          <div className="container mx-auto px-4">
            <p className="text-4xl md:text-5xl font-bold text-center "> Where topnotch</p>
            <p className="text-4xl md:text-5xl font-bold text-center mb-8"><span className="text-orange-500">marketing</span> meets cutting-edge <span className="text-orange-500">tech</span></p>
            
            <p className="text-center max-w-5xl mx-auto text-gray-500 text-lg " style={{fontFamily:"Montserrat, sans-serif"}}>
              Reinvent your marketing today! Concinnity is a premier SEO provider in Hong Kong that offers a comprehensive
              line of digital marketing services. Powering up your company's digital marketing campaign is a must in this
              highly competitive online world. And that is exactly where Concinnity can help you. Check out our digital
              marketing solutions so you can start your journey to success.
            </p>
          </div>
        </section>

        <section className="py-20 " style={{ boxShadow: "0px 40px 100px rgba(0, 0, 0, 0.3)" }}>
          <div className="container mx-auto px-4 flex flex-col items-center ">
            <h2 className="text-4xl md:text-7xl font-bold font-serif text-center mb-14 underline decoration-2 underline-offset-4">Our Services</h2>
            <img src={img} alt="" className='w-[90%] mx-auto'  />
          </div>
          <div className='container mx-auto  flex justify-between pt-10 ' style={{fontFamily:"Montserrat, sans-serif"}}>
            <div className='text-center'>
                <img src={imgDot} alt="" />
                <p className="text-orange-500 text-xl font-bold pt-5">TECHNOLOGY</p>
            </div>
            <div className='text-center'>
                <img src={imgDot} alt="" />
                <p className="text-orange-500 text-xl font-bold pt-5">MARKETING</p>
            </div>
          </div>
        </section>

        <section className="bg-white text-black py-20  ">
          <div className="container mx-auto px-4">
            <p className="text-4xl md:text-5xl font-bold  text-center mb-8 "> Professional <span className="text-orange-500">SEO Services</span></p>
        
            
            <p className="text-center max-w-5xl mx-auto text-gray-500 text-lg mb-8" style={{fontFamily:"Montserrat, sans-serif"}}>
            SEO is at the core of Concinnity’s services. Our SEO experts in Hong Kong deliver data-driven solutions that can supercharge your website and its online presence so you can attract new audiences and boost sales activities. We take a holistic and transparent approach to SEO to provide you nothing but the best results – higher traffic and better conversions.
            </p>
            <p className="text-center max-w-5xl mx-auto text-gray-500 text-lg " style={{fontFamily:"Montserrat, sans-serif"}}>
            At Concinnity, we commit ourselves to ensuring that each stage in optimization, design and build processes is handled with utmost care and backed with research. This allows us to take only the best steps and deliver only the best results. We believe that for an SEO strategy to be effective, we must pay close attention to the technicalities of your online presence and the demands of modern digital marketing. Our talented and experienced team is dedicated to implementing the smartest solutions and aiming for outcomes that exceed your expectations and goals.
            </p>
          </div>
        </section>

        
    </>
  )
}

export default Service