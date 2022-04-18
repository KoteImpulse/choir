import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './StyledLink.module.scss';
import Link from 'next/link';
import { allText } from '../data';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';

interface StyledLinkProps extends HTMLMotionProps<'div'> {
	text: string;
}

const hoverVariants: Variants = {
	initial: { height: "0.1vh", width: '20%' },
	hover: {
		height: "0.7vh",
		width: '100%',
		transition: {
			ease: 'easeOut',
			duration: 0.1,
		},
	},
};

const StyledLink: FC<StyledLinkProps> = ({ text, className, ...props }) => {
	return (
		<motion.div
			className={cn(className, styles.styledLink)}
			{...props}
			whileHover='hover'
			initial='initial'
		>
			<Link href='tel:89108108884'>
				<a className={styles.link}>
					{text}
					<motion.span
						className={styles.underLine}
						variants={hoverVariants}
					></motion.span>
				</a>
			</Link>
		</motion.div>
	);
};

export default StyledLink;
