export const initialState = {
    term: null,
}
//ACTIONS ON THE STATE
export const actionTypes = {
   SET_SEARCH_TERM:" SET_SEARCH_TERM",
}
//reducer
    const reducer = (state, action) => {
        console.log(action);
     switch (action.type) {
         case actionTypes.SET_SEARCH_TERM:
             return  {
                 ...state,
                 term:action.term,
  
             };
         default:
             return state;
     }
 }; 
 //listens to any dispatched action
export default reducer;