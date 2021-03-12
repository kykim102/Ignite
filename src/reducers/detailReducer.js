const initialState = {
	game: { platforms: [] },
	screenshots: { results: [] },
	isLodaing: true,
};

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DETAIL':
			return {
				...state,
				game: action.payload.game,
				screenshots: action.payload.screenshots,
				isLodaing: false,
			};
		case 'LOADING_DETAIL':
			return {
				...state,
				isLodaing: true,
			};
		default:
			return { ...state };
	}
};

export default detailReducer;
