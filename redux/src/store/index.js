import {createStore} from "redux"

const shopReducer = (state ={soap: 11}, action)=>{
 if(action.type === "SELL_SOAP"){
    return {
        soap: state.soap - 1
    }
 }
 if(action.type === "BUY_SOAP"){
    return {
        soap: state.soap + action.payload
    }
 }
 return state
}


const store = createStore(shopReducer)
export default store;