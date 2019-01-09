import counter from './counter'
import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  counter1: counter('bagels'), 
  counter2: counter('coffee'),
  counter3: counter('cheese')
});

export default rootReducer
