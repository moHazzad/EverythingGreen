import { CaseStudy } from "./CaseStudiesSection"

const CaseStudyCard: React.FC<CaseStudy> = ({ title, image }) => {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
      />
    
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white text-5xl font-bold">{title}</h3>
        <div className="w-16 h-1 bg-orange-500 transition-all duration-300 group-hover:w-16"></div>
      </div>
     
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <h3 className="text-orange-500 text-5xl font-bold mb-2">{title}</h3>
          <div className="w-16 h-1 bg-orange-500"></div>
         
        </div>
      </div>
   
      <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    </div>
  )
}



// const CaseStudyCard: React.FC<CaseStudy> = ({ title, image, description }) => {
//   return (
//     <div className="relative overflow-hidden group">
//       <img
//         src={image}
//         alt={title}
//         width={600}
//         height={400}
//         className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center  p-6">
//         <h3 className="text-white text-2xl font-bold">{title}</h3>
//         <div className="w-16 h-1 bg-orange-500 transition-all duration-300 group-hover:w-16"></div>
//       </div>
//       <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <div>
//           <h3 className="text-orange-500 text-2xl font-bold mb-2">{title}</h3>
//         <div className="w-16 h-1 bg-orange-500"></div>
//           {/* <p className="text-white text-sm">{description}</p> */}
//         </div>
//       </div>
//       <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
//     </div>
//   )
// }

export default CaseStudyCard