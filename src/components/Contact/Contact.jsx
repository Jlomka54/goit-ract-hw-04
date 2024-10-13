import css from "./Contact.module.css";

const Contact = (props) => {
  const { name, number, id, onDeleteContact } = props;
  return (
    <li className={css.contactItem} key={id}>
      <div className={css.box}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
