import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../store/contactsSlice";

import css from "./filter.module.css";

export default function Filter() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.filter}>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={css.input}
      />
    </div>
  );
}
