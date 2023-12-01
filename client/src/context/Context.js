import {createContext,useReducer} from 'react';
const INITIAL_STATE={
    user:null,
    isFetching:false,
    error:false,
}

export const context= createContext(INITIAL_STATE);
// to react out this intial state we need provider
export const ContextProvider=({children})=>{
    // onclicking on login button we are going to have 3 main process/actions,
    // 1. start sending user name and password and after sending out credential we will have sucess or fail
    // 2. If success take user info and update the initialState.user
    // 3. If fail make user null again perform all this action in action.js
}