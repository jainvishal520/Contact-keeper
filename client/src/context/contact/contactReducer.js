// import { ADD_CONTACT } from '../types';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT } from '../types';
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETE_CONTACT:
      const new_contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return { ...state, contacts: new_contacts };

    case SET_CURRENT:
      return {
        ...state,
        current: state.contacts.filter(contact => contact.id === action.payload)[0]
      };

    default:
      return state;
  }
};
