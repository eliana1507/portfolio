import { Skills } from "../skills/Skills"

const About = () => {
  return (
    <>
      <section className="my-10">
        <article className="text-center p-5 md:px-16 lg:px-28">
          <h2 className="title text-5xl">About me</h2>
          <p className="py-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat veniam velit asperiores, omnis, iure in quas alias sequi sapiente quisquam magnam consequatur similique earum. Consequuntur nobis ipsum eum. Omnis?</p>
        </article>
        <Skills />
      </section>
    </>
  )
}

export default About