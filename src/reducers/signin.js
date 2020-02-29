const initialState = {
	signin: {
		token: '',
		userData: '',
	},
	signin_error: {
		errorMessage: '',
	},
};
const signinReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {
				...state,
				signin: { ...state.signin, ...action.payLoad },
			};
		case 'SIGN_IN_ERROR':
			return {
				...state,
				signin_error: { ...state.signin_error, ...action.payLoad },
			};
		default:
			return state;
	}
};
export default signinReducer;
