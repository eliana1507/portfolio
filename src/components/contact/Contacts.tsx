import { FiSmartphone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import contacts from "../../utils/contacts.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import './Contacts.css';

export const Contact = () => {
  const iconStyle = "text-7xl mx-auto";
  return (
    <>
      <section className="mt-16 text-center">
        <h2 className="title text-5xl">Contact Me</h2>
        {
          contacts.map((contact, index) => (
            <article className="container flex flex-col justify-center align-middle mt-10" key={index}>
              <a href={contact.link} className="text-md mx-auto">
                <div className="dissolve-circle bg-indigo-500"></div>
                {
                  {
                    'phone': <FiSmartphone className={iconStyle} />,
                    'mail': <GoMail className={iconStyle} />,
                    'map': <FaMapMarkerAlt className={iconStyle} />
                  }[contact.icon]
                }
                <h5 className="my-5"><span className={`text-indigo-500 ${contact.icon !== 'phone' && 'hidden'}`}> +46 </span>{contact.text}</h5>
              </a>
            </article>
          ))
        }
      </section>
    </>
  )
}
