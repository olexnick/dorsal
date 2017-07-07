const initialState = {
  tab:'games'
}

const Reduser = (state = initialState, action) => {
	switch(action.type){
    case 'select/tab':
		return Object.assign({}, state, {
			tab: action.payload.tab
		})
  }
	return state;
}
export default Reduser;
