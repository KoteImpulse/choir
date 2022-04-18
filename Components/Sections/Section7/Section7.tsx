import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Section7.module.scss';
import Image from 'next/image';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion } from 'framer-motion';
import SectionHeader from '../../SectionHeader/SectionHeader';
import StyledLink from '../../StyledLink/StyledLink';

interface Section7Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Section7: FC<Section7Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.Section7)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[6].header}
						rootMargin={rootMargin}
					/>
				</div>
				<motion.div className={styles.item1} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.stepsText[0].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.stepsText[0].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item2} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.stepsText[1].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.stepsText[1].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item3} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.stepsText[2].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.stepsText[2].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item4} {...motionOptions}>
					<p className={styles.subItem1}>
						{allText.sectionHeaders[6].text1}
					</p>
					<p className={styles.subItem2}>
						{allText.sectionHeaders[6].text2}
					</p>
				</motion.div>
				<motion.div className={styles.linkContainer} {...motionOptions}>
					<StyledLink text={allText.buttonText[1].text} />
				</motion.div>

				<div className={styles.img7}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>
						<Image
							src='/picturies/img7.svg'
							layout='fill'
							objectFit='contain'
							alt='котроткая нота'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section7;
