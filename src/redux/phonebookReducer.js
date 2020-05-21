import types from './types';

const initialState = [];

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CONTACTS_ADD:
      return [...state, payload];
    case types.CONTACTS_DELETE:
      return [...state.filter(contact => contact.id !== payload)];
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_SET:
      return payload;
    default:
      return state;
  }
};

export { contactsReducer, filterReducer };
