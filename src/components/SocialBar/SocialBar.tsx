import { FaGithub, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const SocialBar = () => {
  return (
    <div className="flex text-2xl py-4 px-8 items-center justify-between">
      <div className="flex space-x-4">
        <a href="https://uk.linkedin.com/in/eliana-cappello-57317467" className="text-gray-600 hover:text-gray-800">
          <FaLinkedin />
        </a>
        <a href="https://github.com/eliana1507" className="text-gray-600 hover:text-gray-800">
          <FaGithub />
        </a>
        <a href="mailto:eliana.cappello87@gmail.com" className="text-gray-600 hover:text-gray-800">
          <FiMail />
        </a>
        <a href="tel:+46 0700 251209" className="text-gray-600 hover:text-gray-800">
          <FaMobileAlt />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
