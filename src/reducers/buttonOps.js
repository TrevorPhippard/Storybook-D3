import { ACTION_TYPE_DO_STUFF } from '../actions/buttonOps'
import { combineReducers } from 'redux'
  
  export const INITIAL_STATE = {
    memory: 0,
    current: 1,
    operation: null
  }
  
 const counter = (num)=>(state = INITIAL_STATE, action) =>{ 
      const { type, payload, id } = action
    
      var incr = undefined === payload  ? 0 : payload.value
       if(num === id ){
          switch (type) {
            case ACTION_TYPE_DO_STUFF:
              return {
                ...state,
                current: state.current+ incr
              }
            default:
               break
          }
        }
        return state
  }

export default combineReducers({
  counter1: counter('bagels'), 
  counter2: counter('coffee'),
  counter3: counter('cheese')
})
