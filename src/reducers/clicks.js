function clicks(state = [], action) {
  switch (action.type) {
	case 'INCREMENT_CLICKS':
	  return state + 1;
	case 'DECREMENT_CLICKS':
	  return state - 1;
	default:
	  return state;
  }
}
export default clicks;
