import {combineReducers} from 'redux';
import count from './count';
import listNumber from './listNumber';
// tạo reducer từ count và listNumber
export const reducer = combineReducers({count, listNumber})