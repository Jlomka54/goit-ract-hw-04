import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          id={contact.id}
          name={contact.name}
          number={contact.number}
          key={contact.id}
          className={css.contactItem}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
