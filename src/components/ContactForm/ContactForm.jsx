import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { addContact } from "../../store/contactsSlice";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Field required"),
  number: Yup.string().min(3, "Too short!").required("Field required"),
});

export default function ContactForm() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase(),
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field
          name="name"
          type="text"
          className={css.input}
          placeholder="Name"
        />
        <ErrorMessage name="name" component="div" className={css.error} />
        <Field
          name="number"
          type="tel"
          className={css.input}
          placeholder="Number"
        />
        <ErrorMessage name="number" component="div" className={css.error} />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
