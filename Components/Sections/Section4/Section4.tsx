import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Section4.module.scss';
import Image from 'next/image';
import Card from '../../Card/Card';
import SectionHeader from '../../SectionHeader/SectionHeader';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion, Variants } from 'framer-motion';
interface Section4Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const containerVariants: Variants = {
	hidden: {},
	shown: {
		transition: {
			staggerChildren: 0.5,
			delayChildren: 1,
		},
	},
};
const cardVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	shown: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

const Section4: FC<Section4Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.Section4)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[3].header}
						rootMargin={rootMargin}
					/>
				</div>
				<div className={styles.item1}>
					<motion.p className={styles.subItem1} {...motionOptions}>
						{allText.sectionHeaders[3].text1}
					</motion.p>
				</div>
				<div className={styles.item2}>
					<motion.p className={styles.subItem2} {...motionOptions}>
						{allText.sectionHeaders[3].text2}
					</motion.p>
				</div>
				<div className={styles.item3}>
					<motion.p className={styles.subItem3} {...motionOptions}>
						{allText.sectionHeaders[3].text3}
					</motion.p>
				</div>
				<div className={styles.img4}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>
						<Image
							src='/picturies/img4.svg'
							layout='fill'
							objectFit='contain'
							alt='котроткая нота'
						/>
					</div>
				</div>
				<motion.div
					className={styles.cardsContainer}
					initial='hidden'
					whileInView='shown'
					variants={containerVariants}
					viewport={{ margin: rootMargin }}
				>
					<div className={styles.card1}>
						<Card
							text={allText.cardText[0].text}
							header={allText.cardText[0].header}
							darkText={allText.cardText[0].darkText}
							variants={cardVariants}
						/>
					</div>
					<div className={styles.card2}>
						<Card
							text={allText.cardText[1].text}
							header={allText.cardText[1].header}
							darkText={allText.cardText[1].darkText}
							variants={cardVariants}
						/>
					</div>
					<div className={styles.card3}>
						<Card
							text={allText.cardText[2].text}
							header={allText.cardText[2].header}
							darkText={allText.cardText[2].darkText}
							variants={cardVariants}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Section4;
