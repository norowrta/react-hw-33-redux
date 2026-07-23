import { useSelector } from "react-redux";
import css from "./contactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
