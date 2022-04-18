import React, {
	DetailedHTMLProps,
	HTMLAttributes,
	useEffect,
	useState,
} from 'react';
import cn from 'classnames';
import { IoPauseOutline, IoPlayOutline } from 'react-icons/io5';
import styles from './AudioPlayer.module.scss';
import { motion } from 'framer-motion';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { ITrack } from '../../types/player';

interface AudioPlayerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

let audio: HTMLAudioElement;

const music: ITrack[] = [{
	id: 1,
	title: 'Д. Яичков. Пасхальные стихиры знаменного распева',
	author: 'DC',
	audio: '/audioFiles/DC1.mp3',
},
{
	id: 2,
	title: 'Полихронион. Многая лета на греческом',
	author: 'DC',
	audio: '/audioFiles/DC2.mp3',
},
{
	id: 3,
	title: 'Д. Яичков. Взбранной воеводе',
	author: 'DC',
	audio: '/audioFiles/DC3.mp3',
},	
];

const AudioPlayer = ({
	className,
	...props
}: AudioPlayerProps): JSX.Element => {
	const { activeTrack, isPlaying, currentTime, duration, volume } =
		useTypedSelector((state) => state.player);
	const {
		pauseTrack,
		playTrack,
		setActiveTrack,
		setCurrentTime,
		setDuration,
		setVolume,
	} = useActions();

	useEffect(() => {
		if (!audio) {
			audio = new Audio();
		}
		if (activeTrack) {
			audio.volume = volume;
			audio.src = activeTrack.audio;
			audio.onloadedmetadata = () => {
				setDuration(Math.floor(audio.duration));
			};
			audio.ontimeupdate = () => {
				setCurrentTime(audio.currentTime);
			};
			playTrack();
		}
	}, [activeTrack]);

	useEffect(() => {
		if (isPlaying) {
			audio.play();
		} else {
			audio.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		if (audio.currentTime == audio.duration) {
			setCurrentTime(0);
			pauseTrack();
		}
	}, [currentTime]);

	const play = (track: ITrack) => {
		if (track.id !== activeTrack?.id && isPlaying) {
			pauseTrack();
			setActiveTrack(track);
		} else if (track.id !== activeTrack?.id && !isPlaying) {
			setActiveTrack(track);
			playTrack();
		} else if (track.id === activeTrack?.id && isPlaying) {
			pauseTrack();
		} else if (track.id === activeTrack?.id && !isPlaying) {
			playTrack();
		}
	};

	return (
		<div className={cn(styles.audioPlayer, className)} {...props}>
			{music.map((track) => {
				return (
					<motion.div
						key={track.id}
						className={styles.trackItem}
						whileHover={
							activeTrack?.id !== track.id
								? { background: 'var(--colorMD)' }
								: {}
						}
						animate={
							activeTrack?.id === track.id
								? { background: 'var(--colorM)' }
								: { background: 'var(--colorC)' }
						}
					>
						<span
							className={styles.trackIcon}
							onClick={() => {
								play(track);
							}}
						>
							{activeTrack?.id === track.id && isPlaying ? (
								<IoPauseOutline />
							) : (
								<IoPlayOutline />
							)}
						</span>
						<button className={styles.trackSelectButton}>
							{track.title}
						</button>
					</motion.div>
				);
			})}
		</div>
	);
};

export default AudioPlayer;
