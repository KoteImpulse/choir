export interface ITrack {
	id: number;
	title: string;
	author: string;
	audio: string;
}

export interface PlayerState {
	activeTrack: ITrack | null;
	currentTime: number;
	volume: number;
	duration: number;
	isPlaying: boolean;
}

export enum PlayerActionTypes {
	PLAY = 'PLAY',
	PAUSE = 'PAUSE',
	SET_ACTIVE_TRACK = 'SET_ACTIVE_TRACK',
	SET_CURRENT_TIME = 'SET_CURRENT_TIME',
	SET_DURATION = 'SET_DURATION',
	SET_VOLUME = 'SET_vOLUME',
}

interface PlayAction {
	type: PlayerActionTypes.PLAY;
}
interface PauseAction {
	type: PlayerActionTypes.PAUSE;
}
interface SetActiveAction {
	type: PlayerActionTypes.SET_ACTIVE_TRACK;
	payload: ITrack;
}
interface SetCurrentTimeAction {
	type: PlayerActionTypes.SET_CURRENT_TIME;
	payload: number;
}
interface SetDurationAction {
	type: PlayerActionTypes.SET_DURATION;
	payload: number;
}
interface SetVolumeAction {
	type: PlayerActionTypes.SET_VOLUME;
	payload: number;
}

export type PlayerAction =
	| PlayAction
	| PauseAction
	| SetActiveAction
	| SetCurrentTimeAction
	| SetDurationAction
	| SetVolumeAction;
