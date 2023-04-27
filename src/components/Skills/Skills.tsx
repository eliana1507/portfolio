import Marquee from "react-fast-marquee";
import { skillsImage } from "../../utils/skillsImage";
import './Skills.css'

export const Skills = () => {
  const classList = 'shadowCstm rounded-xl w-40 h-40 m-6 flex flex-col align-middle justify-center py-8 px-4 ease-in-out duration-300 hover:scale-125';
  const skills: string[] = [
    'Java', 'AWS', 'Docker', 'Git', 'Kotlin', 'MySql', 'MongoDB', 'PHP', 'HTML', 'CSS', 'Javascript', 'React', 'Bootstrap', 'MaterialUI'
  ];

  return (
    <>
      <article className='text-center'>
        <h2 className='text-4xl title'>My Skill</h2>
        <div className="relative flex overflow-x-hidden mt-8">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {
              skills.map((skill, index) => <div key={index}>
                <div className={classList}>
                  <img src={skillsImage(skill.toLowerCase())} alt={skill} className="h-14" />
                  <h4 className="title mt-5 text-xl">{skill}</h4>
                </div>
              </div>)
            }
          </Marquee>
        </div>
      </article>
    </>
  );
}
