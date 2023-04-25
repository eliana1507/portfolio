import SocialBar from '../SocialBar/SocialBar';
import './Home.css';

export const Home = () => {
  return (
    <>
      <section className="box pb-10 pt-8">
        <article className="flex flex-col align-middle items-center">
          <img className='w-64 rounded-full my-10' src="https://media.licdn.com/dms/image/C4D03AQF-1SEMxyfuxA/profile-displayphoto-shrink_800_800/0/1621088601599?e=2147483647&v=beta&t=p7SDprSzsvN9SJaNv5qTTdd6AJud_sjGSKDUVEPqZks" alt="profile" />
          <h1 className='title text-5xl'>I'm Eliana</h1>
          <h4 className='subtitle text-xl'>Senior Java Developer & Architect</h4>
          <p className='p-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur totam illum veniam! Hic commodi aut et, aliquid similique aspernatur obcaecati? Iusto cupiditate aspernatur quisquam illo dolorem ad ullam, aliquam veniam expedita deleniti sapiente iste rerum minima enim debitis officia nihil voluptas perspiciatis similique fugit aut nisi? Optio, odio doloremque.</p>
          <SocialBar />
        </article>
      </section>
    </>
  )
}  