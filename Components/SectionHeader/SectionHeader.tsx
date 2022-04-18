import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import styles from './SectionHeader.module.scss';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';

interface SectionHeaderProps extends HTMLMotionProps<'h2'> {
	text: string;
	rootMargin: string;
}

const headerVariants: Variants = {
	hidden: {
		opacity: 0,
		skewY: '10deg',
	},
	shown: {
		opacity: 1,
		skewY: 0,
		transition: {
			opacity: {
				delay: 0.5,
			},
			duration: 1.0,
		},
	},
};

const SectionHeader: FC<SectionHeaderProps> = ({
	rootMargin,
	text,
	className,
	...props
}) => {
	return (
		<motion.h2
			className={cn(className, styles.sectionHeader)}
			{...props}
			initial='hidden'
			variants={headerVariants}
			whileInView={'shown'}
			viewport={{ margin: rootMargin }}
		>
			{text}
		</motion.h2>
	);
};

export default SectionHeader;
