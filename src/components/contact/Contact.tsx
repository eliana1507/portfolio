import { FiSmartphone } from "react-icons/fi";
import contacts from "../../utils/contacts.json";
import { createElement } from "react";

export const Contact = () => {

  return (
    <>
      <section className="mt-16 text-center">
        <h2 className="title text-5xl">Contact Me</h2>
        {
          contacts.map((contact, index) => (
            <article className="container flex flex-col justify-center align-middle mt-10" key={index}>
              <a href={contact.link} className="text-md mx-auto">
                {/* <FiSmartphone className="text-7xl mx-auto" /> */}
                {contact.icon}
                <h5 className="my-5">{contact.text}</h5>
              </a>
            </article>
          ))
        }
      </section>
    </>
  )
}
