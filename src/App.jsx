import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid/non-secure";

const App = () => {
  const BasecalContact = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [filterSerchName, setFilterSearchName] = useState(BasecalContact); // Ініціалізуємо зі значенням BasecalContact
  const [findContact, setFindContact] = useState("");

  const handleChange = (evt) => {
    const searchValue = evt.target.value;
    setFindContact(searchValue);

    if (searchValue === "") {
      setFilterSearchName(contacts);
      return;
    }

    const findContactByName = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterSearchName(findContactByName);
  };

  const [contacts, setContact] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contactsLIst");
    const parsedContacts = stringifiedContacts
      ? JSON.parse(stringifiedContacts)
      : BasecalContact;
    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem("contactsLIst", JSON.stringify(contacts));

    setFilterSearchName(contacts);
  }, [contacts]);

  const onAddContact = (value) => {
    const finalContact = {
      ...value,
      id: nanoid(),
    };

    setContact([...contacts, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    const updateContact = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContact(updateContact);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox findContact={findContact} handleChange={handleChange} />
      <ContactList
        contacts={filterSerchName}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
