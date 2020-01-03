import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { current, addContact, clearCurrent, updateContact } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const clearAll = () => {
    clearCurrent();
  };
  const { name, email, phone, type } = contact;
  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (current) {
      //Update contact
      updateContact(contact);
    } else {
      //add contact
      addContact(contact);
    }
    clearAll();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={onChange}
        placeholder='Name'
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email'
      />
      <input
        type='text'
        name='phone'
        value={phone}
        onChange={onChange}
        placeholder='Phone'
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <button
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        >
          {current === null ? 'Add Contact' : 'Update Contact'}
        </button>
        <button
          onClick={clearAll}
          value='Clear Contact'
          className='btn btn-light btn-block'
        >
          Clear Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
