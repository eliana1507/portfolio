import SocialBar from '../socialBar/SocialBar';
import './Home.css';

export const Home = () => {
  return (
    <>
      <section className="box pb-14 pt-8 lg:py-40">
        <article className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 text-center lg:text-left md:px-16 lg:px-28">
            <img className='w-64 rounded-full my-10 mx-auto lg:hidden' src="https://media.licdn.com/dms/image/C4D03AQF-1SEMxyfuxA/profile-displayphoto-shrink_800_800/0/1621088601599?e=2147483647&v=beta&t=p7SDprSzsvN9SJaNv5qTTdd6AJud_sjGSKDUVEPqZks" alt="profile" />
            <h1 className='title text-5xl'>I'm Eliana</h1>
            <h4 className='subtitle text-xl py-6'>Senior Java Developer & Architect</h4>
            <p className='px-6 md:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur totam illum veniam! Hic commodi aut et, aliquid similique aspernatur obcaecati? Iusto cupiditate aspernatur quisquam illo dolorem ad ullam, aliquam veniam expedita deleniti sapiente iste rerum minima enim debitis officia nihil voluptas perspiciatis similique fugit aut nisi? Optio, odio doloremque.</p>
            <SocialBar />
          </div>
          <img className='w-64 rounded-full my-10 hidden lg:block' src="https://media.licdn.com/dms/image/C4D03AQF-1SEMxyfuxA/profile-displayphoto-shrink_800_800/0/1621088601599?e=2147483647&v=beta&t=p7SDprSzsvN9SJaNv5qTTdd6AJud_sjGSKDUVEPqZks" alt="profile" />
        </article>
      </section>
    </>
  )
}  