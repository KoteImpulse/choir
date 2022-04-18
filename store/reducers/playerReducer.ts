import {
	ITrack,
	PlayerAction,
	PlayerActionTypes,
	PlayerState,
} from '../../types/player';

const initialState: PlayerState = {
	activeTrack: null,
	currentTime: 0,
	volume: 0.1,
	duration: 0,
	isPlaying: false,
};

export const playerReducer = (
	state = initialState,
	action: PlayerAction
): PlayerState => {
	switch (action.type) {
		case PlayerActionTypes.PLAY:
			return { ...state, isPlaying: true };
		case PlayerActionTypes.PAUSE:
			return { ...state, isPlaying: false };
		case PlayerActionTypes.SET_ACTIVE_TRACK:
			return {
				...state,
				activeTrack: action.payload,
				duration: 0,
				currentTime: 0,
			};
		case PlayerActionTypes.SET_CURRENT_TIME:
			return { ...state, currentTime: action.payload };
		case PlayerActionTypes.SET_DURATION:
			return { ...state, duration: action.payload };
		case PlayerActionTypes.SET_VOLUME:
			return { ...state, volume: action.payload };

		default:
			return state;
	}
};
