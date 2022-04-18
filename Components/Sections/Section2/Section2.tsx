import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import cn from 'classnames';
import styles from './Section2.module.scss';
import Image from 'next/image';
import SectionHeader from '../../SectionHeader/SectionHeader';
import StyledLink from '../../StyledLink/StyledLink';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion } from 'framer-motion';

interface Section2Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Section2: FC<Section2Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.section2)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[1].header}
						rootMargin={rootMargin}
					/>
				</div>
				<div className={styles.item1}>
					<motion.p className={styles.subItem1} {...motionOptions}>
						{allText.sectionHeaders[1].text1}
					</motion.p>
				</div>
				<div className={styles.item2}>
					<motion.p className={styles.subItem2} {...motionOptions}>
						{allText.sectionHeaders[1].text2}
					</motion.p>
				</div>
				<motion.div className={styles.linkContainer} {...motionOptions}>
					<StyledLink text={allText.buttonText[1].text} />
				</motion.div>
				<div className={styles.videoContainer}>
					<iframe
						title='video youtube'
						className={styles.video}
						src='https://www.youtube-nocookie.com/embed/r2JK66K18MA?controls=0&amp;start=498'
					/>
				</div>
				<div className={styles.img1}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>
						<Image
							src='/picturies/img1.svg'
							layout='fill'
							objectFit='contain'
							alt='скрипичный ключ'
						/>
					</div>
				</div>
				<div className={styles.img2}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>
						<Image
							src='/picturies/img2.svg'
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

export default Section2;
