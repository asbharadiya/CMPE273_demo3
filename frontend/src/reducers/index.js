
const initialState= {
  isLogged: undefined,
  profile: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SESSION_ACTIVE" :
      return {...state,isLogged:true};
    case "SESSION_INACTIVE" :  
      return {...state,isLogged:false};
    case "GET_USER_PROFILE_SUCCESS" :
      return {
        ...state,
        profile:action.data
      };
    case "GET_USER_PROFILE_FAILURE" :  
      return {
        ...state
      };
    default : 
      return state;
  }
};

export default reducer;
