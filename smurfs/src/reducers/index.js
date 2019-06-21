/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  getSmurfs,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  addSmurf,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAIL,
  updateSmurf,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
  deleteSmurf
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initializeState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ""
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function(state = initializeState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCH_SMURF_FAIL:
      return {}
    case ADD_SMURF_START:
      return {}
    case ADD_SMURF_SUCCESS:
      return {}
    case ADD_SMURF_FAIL:
      return {}
    case UPDATE_SMURF_START:
      return {}
    case UPDATE_SMURF_SUCCESS:
      return {}
    case UPDATE_SMURF_FAIL:
      return {}
    case DELETE_SMURF_START:
      return {}
    case DELETE_SMURF_SUCCESS:
      return {}
    case DELETE_SMURF_FAIL:
      return {}
    default:
      return state;
  }
}
