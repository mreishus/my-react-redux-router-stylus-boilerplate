import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import clicks from './clicks';

const rootReducer = combineReducers({clicks, routing: routerReducer});
export default rootReducer;
