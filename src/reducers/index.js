import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editingReducer from './editing-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers(
  {
    formVisible: formVisibleReducer,
    masterKegList: kegListReducer,
    editing: editingReducer,
    selectedKeg: selectedKegReducer
  });

export default rootReducer;