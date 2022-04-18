import React, { ForwardedRef, forwardRef, } from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';
import { HTMLMotionProps, motion, } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
	text: string;
	header: string;
	darkText: string;
}

const Card = (
	{ text, header, darkText, className, ...props }: CardProps,
	ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
	return (
		<motion.div
			className={cn(styles.cardBlock, className)}
			{...props}
			ref={ref}
		>
			<div className={styles.cardContainer}>
				<p className={styles.cardHeader}>{header}</p>
				<div className={styles.cardContent}>
					<p className={styles.cardText}>{text}</p>
					<p className={styles.cardDarkText}>{darkText}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default motion(forwardRef(Card));
