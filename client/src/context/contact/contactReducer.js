// import { ADD_CONTACT } from '../types';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT
} from '../types';
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case UPDATE_CONTACT:
      // const filtered_contacts = state.contacts.filter(contact => {
      //   return contact.id !== action.payload.id;
      // });
      // return { ...state, contacts: [...filtered_contacts, action.payload] };
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case DELETE_CONTACT:
      const new_contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return { ...state, contacts: new_contacts };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    default:
      return state;
  }
};
