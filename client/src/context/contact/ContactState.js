import React, { useReducer } from 'react';
// import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
// import { ADD_CONTACT, CLEAR_CURRENT, DELETE_CONTACT, SET_ALERT, SET_CURRENT, UPDATE_CONTACT, CLEAR_FILTER, FILTER_CONTACTS } from '../types';
// import { getMaxListeners } from 'cluster';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'vishal',
        phone: 123456,
        email: 'vishaljain@gmail.com',
        type: 'personal'
      },
      {
        id: 2,
        name: 'vishal1',
        phone: 123456,
        email: 'vishal1jain@gmail.com',
        type: 'professional'
      },
      {
        id: 3,
        name: 'vishal2',
        phone: 123456,
        email: 'vishal2jain@gmail.com',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
