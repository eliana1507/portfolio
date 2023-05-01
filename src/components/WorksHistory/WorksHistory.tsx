import workList from '../../utils/worksHistory.json'
import { InView } from 'react-intersection-observer';
import { FaJava } from 'react-icons/fa';
import './WorksHistory.css';

export const WorksHistory = () => {
  return (
    <section className='hidden md:block mt-10'>
      <h2 className='title text-5xl text-center mb-20'>My Work History</h2>
      {
        workList.map((work, index) => (
          <div className="flex flex-row">
            <InView delay={0} key={index} >
              {({ inView, ref }) => (
                index % 2 === 0 ?
                  <>
                    <article className="basis-1/2 ps-14 lg:ps-40 p-10" ref={ref}>
                      <div className={`opacity-0 ${inView ? 'animate-lg-work animate-opacity transition-opacity duration-1000 delay-500' : ''}`}>
                        <div className="text-gray-800 font-semibold mb-2 mt-8 title text-2xl border-b-2">{work.companyName}</div>
                        <div className="text-gray-600 text-sm mb-2">{work.jobDescription}</div>
                        <div className="text-gray-600 text-sm">{work.startingDate} - {work.endDate}</div>
                      </div>
                    </article>

                    <div className="w-4 bg-indigo-500 relative">
                      <div className={`circle bg-indigo-500 ${index > 0 && 'hidden'}`}></div>
                      <FaJava className={`absolute text-5xl top-1/2 ico-position bg-white py-2 rounded-full text-orange-500
                        ${inView ? 'animate-lg-icon animate-opacity transition-opacity duration-1000 delay-500' : ''} 
                      `} />
                    </div>
                    <div className="basis-1/2"></div>
                  </>
                  :
                  <>
                    <div className="basis-1/2"></div>
                    <div className="w-4 bg-indigo-500 relative">
                      <FaJava className={`absolute text-5xl top-1/2 ico-position bg-white py-2 rounded-full text-orange-500
                        ${inView ? 'animate-lg-icon animate-opacity transition-opacity duration-1000 delay-500' : ''} 
                      `} />
                    </div>
                    <article className="basis-1/2 pe-14 lg:pe-40 p-10" ref={ref}>
                      <div className={`opacity-0 ${inView ? 'animate-lg-right-work animate-opacity transition-opacity duration-1000 delay-500' : ''}`}>
                        <div className="text-gray-800 font-semibold mb-2 mt-8 title text-2xl border-b-2">{work.companyName}</div>
                        <div className="text-gray-600 text-sm mb-2">{work.jobDescription}</div>
                        <div className="text-gray-600 text-sm">{work.startingDate} - {work.endDate}</div>
                      </div>
                    </article>
                  </>
              )}
            </InView>
          </div>
        ))}
      <div className="basis-1/2">
      </div>
    </section >
  )
}
