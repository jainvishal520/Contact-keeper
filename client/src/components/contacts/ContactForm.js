import React, { useContext, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { current } = contactContext;
  console.log(current);
  const initState =
    current !== null
      ? current
      : {
          name: '',
          email: '',
          phone: '',
          type: 'professional'
        };
  console.log(initState);
  const [contact, setContact] = useState(initState);

  const { name, email, phone, type } = contact;
  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'professional'
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder="Phone"
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <button
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
