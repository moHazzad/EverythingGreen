import logo from '../../../../public/logo_fashionTV.png.webp'
import logo1 from '../../../../public/logo_Nissin.png.webp'
import logo2 from '../../../../public/logo_DP-world.png.webp'
import logo3 from '../../../../public/logo_city-of-dreams.png.webp'
import logo4 from '../../../../public/logo_KPMG.png.webp'
import logo5 from '../../../../public/logo_THP-Group.png.webp'
import logo6 from '../../../../public/logo_Pacific-Prime.png.webp'
import logo7 from '../../../../public/logo_YesStyle.png.webp'
import logo8 from '../../../../public/logo_Beconcept-.png.webp'
import { Button } from '@/components/ui/button'

const Client = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  md:text-7xl font-bold font-serif text-center mb-16 underline decoration-2 underline-offset-4 " style={{fontFamily:"Playfair Display, serif"}}>
          Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center items-center max-w-3xl mx-auto ">
          {[logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8].map((imgSrc, index) => (
            <div key={index} className="group">
              <img
                src={imgSrc}
                alt={`Client Logo ${index + 1}`}
                className="w-40 h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out hover:cursor-pointer "
              />
            </div>
          ))}
        </div>
        <div className="bg-white text-black py-20  ">
          <div className="max-w-3xl mx-auto px-4 flex flex-col gap-8 items-center" style={{fontFamily:"Playfair Display, serif"}}>
            <div>
            <p className="text-4xl md:text-5xl font-bold  text-center  "> <span className="text-orange-500">Let’s talk About</span></p>
            <p className="text-4xl md:text-5xl font-bold  text-center  "> <span className="text-orange-500">Data Architecture</span></p>
        
            
            </div>
         
            <p className="text-center max-w-5xl mx-auto  text-lg text-orange-500 " style={{fontFamily:"Montserrat, sans-serif"}}>
            Grow your business even further. Concinnity Limited is the only digital marketing agency in HK that power up your company’s online marketing campaign. Thrive in this highly competitive market when you start partnering with us. See a great improvement to the overall run of your campaign by trying one of our services today!            </p>
            <Button variant='default' className='bg-orange-500 w-52 text-white rounded-xl '>Let's Talk</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client