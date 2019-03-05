function posts(state=[], action){
   switch(action.type){
       case 'INCREMENT_LIKES':
       console.log('incrementing likes');
       const i = action.index;
       return [
           ...state.slice(0, i),//before the one which is updating
           {...state[i], likes: state[i].likes + 1},
           ...state.slice(i + 1)//after the one which is updating
       ]
       default:
       return state;
   }
}

export default posts;