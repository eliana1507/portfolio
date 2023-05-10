import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  const iconsStyle = "text-2xl text-indigo-400 hover:text-indigo-600";
  return (
    <footer className="mt-10 bg-[#f2f4ff]">
      <ul className=" flex justify-center pt-2">
        <li className="text-end me-3">
          <a href="https://uk.linkedin.com/in/eliana-cappello-57317467">
            <BsLinkedin className={iconsStyle} />
          </a>
        </li>
        <li className="text-start">
          <a href="https://github.com/eliana1507">
            <BsGithub className={iconsStyle} />
          </a>
        </li>
      </ul>
      <p className="text-center text-indigo-500 mb-0 py-2 fs-6">
        &#169; Designed by
        <span className="title ms-2 hover:hover:text-indigo-600 underline">
          <a href="https://andrea-agosta.web.app/" target="_blank" rel="noopener noreferrer" >Andrea Agosta</a>
        </span>
      </p>
    </footer>
  )
}
