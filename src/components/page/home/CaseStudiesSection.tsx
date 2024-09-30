import CaseStudyCard from "./CaseStudyCard"
import client1 from '../../../../public/Ecomerce-case-study-copy-700x500.jpg.webp'
import client2 from '../../../../public/Lead-generation-700x500.jpg.webp'
import client3 from '../../../../public/UK-property-lead-generation-700x500.jpg.webp'
import client4 from '../../../../public/SEO-case-study-700x500.jpg.webp'


export interface CaseStudy {
    title: string
    image: string
   
  }
const caseStudies: CaseStudy[] = [
    {
      title: 'E-commerce Case Study',
      image: client1
    },
    {
      title: 'Lead Generation Case Study',
      image: client2
    },
    {
      title: 'UK Property Lead Generation Case Study',
      image: client3
    },
    {
      title: 'SEO Case Study',
      image: client4
    }
  ]

const CaseStudiesSection: React.FC = () => {
    return (
        <>
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-white md:text-7xl font-bold font-serif text-center mb-14 underline decoration-2 underline-offset-4" style={{fontFamily:"Playfair Display, serif"}}>
            Case Studies
          </h2>
          {/* <div className="w-16 h-1 bg-orange-500"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white text-black py-20">
          <div className="container mx-auto px-4">
          <p className="text-4xl  font-bold  text-center mb-8 "><span className="text-orange-500">Digital marketing</span> tailored for your <span className="text-orange-500">brand</span></p>
            
            <p className="text-center max-w-5xl mx-auto text-gray-500 text-lg " style={{fontFamily:"Montserrat, sans-serif"}}>
            We understand that your business is different and your marketing goals could be different from that of other brands we have worked with. Concinnity endeavors to tailor our services according to your unique requirements and objectives. In this fast-changing online world where everyone is at different stages of their business journey, we do not believe in cookie-cutter solutions. We create answers and invent new approaches just for you!
            </p>
            <p className="text-center max-w-5xl mx-auto text-gray-500 text-lg pt-8" style={{fontFamily:"Montserrat, sans-serif"}}>
            Answers and invent new approaches just for you! Whether you are choosing us to optimize and market an existing website/online business or you wish to have a new platform built for you, Concinnity is here for you.            </p>
          <p className="text-center font-bold mt-10 text-xl">Talk to us.</p>

          </div>
        </section>
            </>
    )
  }
  
  export default CaseStudiesSection