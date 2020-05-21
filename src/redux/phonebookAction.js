import { createAction } from '@reduxjs/toolkit';
import types from './types';

// export const filterSetAction = filterValue => ({
//   type: types.FILTER_SET,
//   payload: filterValue,
// });
export const filterSetAction = createAction(types.FILTER_SET);

// export const contactsAddAction = newUser => ({
//   type: types.CONTACTS_ADD,
//   payload: newUser,
// });
export const contactsAddAction = createAction(types.CONTACTS_ADD);

// export const contactsDeleteAction = id => ({
//   type: types.CONTACTS_DELETE,
//   payload: id,
// });
export const contactsDeleteAction = createAction(types.CONTACTS_DELETE);
