import React, { useContext, useRef, useEffect } from 'react';
import ContactContect from '../../context/contact/contactContext';
const ContactFilter = () => {
  const contactContext = useContext(ContactContect);
  const { filterContacts, clearFilter } = contactContext;
  const text = useRef('');
  useEffect(() => {
    if (filterContacts === null) {
      text.current.value = '';
    }
  });
  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <form>
        <input
          ref={text}
          type='text'
          placeholder='Filter contacts ....'
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ContactFilter;
