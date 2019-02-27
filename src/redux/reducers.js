export default function reducers(state, action){
   // console.log(state,action);
    //action.data //user
   if(action.type==="add"){

   }
   console.log(state,action.user);
   if(action.user)
      state.users.push(action.user);
   return{
       users: state.users
   }
}