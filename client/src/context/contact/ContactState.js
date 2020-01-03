import React, { useReducer } from 'react';
import uuid from 'uuid';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT
} from '../types';
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
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts

  // Clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
