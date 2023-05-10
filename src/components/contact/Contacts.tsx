import { FiSmartphone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import contacts from "../../utils/contacts.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import './Contacts.css';

export const Contact = () => {
  const iconStyle = "text-7xl mx-auto mt-14 flip-icon";
  return (
    <>
      <section className="mt-36 text-center">
        <h2 className="title text-5xl">Contact Me</h2>
        <div className="lg:flex">
          {
            contacts.map((contact, index) => (
              <article className="container flex flex-col justify-center align-middle mt-10 text-gray-600" key={index}>
                <a href={contact.link} className="text-md mx-auto contact-animation">
                  <div className="dissolve-circle bg-indigo-500 blur-sm"></div>
                  {
                    {
                      'phone': <FiSmartphone className={iconStyle} />,
                      'mail': <GoMail className={iconStyle} />,
                      'map': <FaMapMarkerAlt className={iconStyle} />
                    }[contact.icon]
                  }
                  <h5 className="my-5 text-xl title">
                    <span className={`text-indigo-500 ${contact.icon !== 'phone' && 'hidden'}`}> +46 </span>
                    {contact.text}
                  </h5>
                </a>
              </article>
            ))
          }
        </div>
      </section>
    </>
  )
}
