import { useDispatch } from "react-redux";
import { removeContact } from "../../store/contactsSlice";
import css from "./contactListItem.module.css";

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(removeContact(id))}>Delete</button>
    </li>
  );
}
