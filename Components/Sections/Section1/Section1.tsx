import React, { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import cn from 'classnames';
import styles from './Section1.module.scss';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { allText } from '../../data';

interface Section1Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const containerVariants: Variants = {
	hidden: {},
	shown: {
		transition: {
			staggerChildren: 0.05,
		},
	},
};
const letterVariants: Variants = {
	hidden: { opacity: 0, scale: 1.5 },
	shown: {
		opacity: 1,
		scale: 1,
		transition: {
			ease: 'linear',
		},
	},
};
const container2Variants: Variants = {
	hidden: {},
	shown: {
		transition: {
			delayChildren: 1,
			staggerChildren: 0.1,
		},
	},
};
const textVariants: Variants = {
	hidden: { opacity: 0, y: '150%' },
	shown: {
		opacity: 1,
		y: '0%',
		transition: {
			ease: [0.38, 0.28, 0.39, 0.91],
			duration: 0.5,
		},
	},
};
const textVariants2: Variants = {
	hidden: { opacity: 0, y: '150%' },
	shown: {
		opacity: 1,
		y: '0%',
		transition: {
			ease: [0.38, 0.28, 0.39, 0.91],
			duration: 0.5,
			delay: 1.5,
		},
	},
};

const Section1: FC<Section1Props> = ({ className, ...props }) => {
	const text = allText.sectionHeaders[0].header2;
	const words = text!.split(' ');
	const wordsSp = words.map(
		(word, i) => word + `${i !== words.length - 1 ? '\u00a0' : ''}`
	);
	const letters = wordsSp.map((word, i) => {
		return (
			<span className={styles.word} key={i}>
				{[...word].map((letter, i) => (
					<motion.span
						variants={letterVariants}
						key={i}
						className={styles.letter}
					>
						{letter}
					</motion.span>
				))}
			</span>
		);
	});

	return (
		<div className={cn(className, styles.section1)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<motion.h1
						className={styles.title}
						initial='hidden'
						animate='shown'
						variants={containerVariants}
					>
							<Image
								src='/picturies/notes1p.svg'
								layout='fill'
								objectFit='contain'
								alt='ноты'
								priority
							/>
						{letters}
					</motion.h1>
				</div>
				<div className={styles.subTitleContent}>
					<motion.div
						className={styles.subtitle}
						initial='hidden'
						animate='shown'
						variants={container2Variants}
					>
						<motion.span
							className={styles.subTitleText}
							variants={textVariants}
						>
							{allText.sectionHeaders[0].text1}
						</motion.span>
						<motion.span
							className={styles.subTitleText}
							variants={textVariants}
						>
							{allText.sectionHeaders[0].text2}
						</motion.span>
						<motion.span
							className={styles.subTitleText}
							variants={textVariants}
						>
							{allText.sectionHeaders[0].text3}
						</motion.span>
					</motion.div>
				</div>
				<div className={styles.item1}>
					<motion.p
						className={styles.subItem1}
						animate='shown'
						initial='hidden'
						variants={textVariants2}
					>
						{allText.infoBlock[0].header}
					</motion.p>
					<motion.p
						className={styles.subItem2}
						animate='shown'
						initial='hidden'
						variants={textVariants2}
					>
						{allText.infoBlock[0].text}
					</motion.p>
				</div>
				<div className={styles.item2}>
					<motion.p
						className={styles.subItem1}
						animate='shown'
						initial='hidden'
						variants={textVariants2}
					>
						{allText.infoBlock[2].header}
					</motion.p>
					<motion.p
						className={styles.subItem2}
						animate='shown'
						initial='hidden'
						variants={textVariants2}
					>
						{allText.infoBlock[2].text}
					</motion.p>
				</div>
				<div className={styles.item3}>
					<motion.p
						className={styles.subItem1}
						animate='shown'
						initial='hidden'
						variants={textVariants2}
					>
						{allText.infoBlock[1].header}
					</motion.p>
					<motion.p
						className={styles.subItem2}
						animate='shown'
						initial='hidden'
						variants={textVariants2}
					>
						{allText.infoBlock[1].text}
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default Section1;
