import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from 'views/discover/components/recommend/store'
import { reducer as playReducer} from 'views/play/store'

export default combineReducers({
  'recommend': recommendReducer,
  'play': playReducer
})