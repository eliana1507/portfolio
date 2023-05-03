import './WorksHistoryMobile.css';
import workList from '../../../utils/worksHistory.json'
import { FaDotCircle, FaJava } from 'react-icons/fa';
import { InView } from 'react-intersection-observer';

export const WorksHistoryMobile = () => {
  return (
    <>
      <section className='mt-2 custom-max-width flex flex-col align-middle m-auto md:hidden'>
        <h2 className='text-5xl title text-center my-10'>My Work History</h2>
        <div className='flex justify-center items-start'>
          <div className="flex flex-col ml-4">
            {workList.map((work, index) => {
              const delay = index === 1 ? 1500 : index > 1 ? 2500 : 0;
              return (
                <InView key={index} delay={delay}>
                  {({ inView, ref }) => (
                    <article
                      ref={ref}
                      className={` border-l-8 border-indigo-500 border-opacity-50 ps-5 relative ${index === workList.length - 1 ? 'mb-0' : ''}`}
                    >
                      {/* <FaDotCircle className='absolute text-3xl top-1/2 text-yellow-500 l-position' /> */}
                      <FaJava className={`absolute text-5xl top-1/2 l-position bg-white py-2 rounded-full text-orange-500 opacity-0 
                          ${inView ? 'animate-icon animate-opacity transition-opacity duration-1000 delay-500' : ''} 
                        `} />
                      <div className={`opacity-0 ${inView ? 'animate-work animate-opacity transition-opacity duration-1000 delay-500' : ''}`}>
                        <div className="text-gray-800 font-semibold mb-2 mt-8 title text-2xl border-b-2 me-3">{work.companyName}</div>
                        <div className="text-gray-600 text-sm mb-2">{work.jobDescription}</div>
                        <div className="text-gray-600 text-sm">{work.startingDate} - {work.endDate}</div>
                      </div>
                    </article>
                  )}
                </InView>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}
