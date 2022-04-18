import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import cn from 'classnames';
import styles from './Section3.module.scss';
import Image from 'next/image';
import SectionHeader from '../../SectionHeader/SectionHeader';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const AudioPlayer = dynamic(() => import('../../AudioPlayer/AudioPlayer'), {
	ssr: false,
});
interface Section3Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Section3: FC<Section3Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.section3)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[2].header}
						rootMargin={rootMargin}
					/>
				</div>				
				<div className={styles.item1}>
					<motion.p className={styles.subItem1} {...motionOptions}>
						{allText.sectionHeaders[2].text1}
					</motion.p>
				</div>
				<div className={styles.item2}>
					<motion.p className={styles.subItem2} {...motionOptions}>
						{allText.sectionHeaders[2].text2}
					</motion.p>
				</div>
				<div className={styles.audioPlayer}>
					<AudioPlayer />
				</div>				
				<div className={styles.item3}>
					<motion.p className={styles.subItem3} {...motionOptions}>
						{allText.sectionHeaders[2].text3}
					</motion.p>
				</div>
				<div className={styles.item4}>
					<motion.p className={styles.subItem4} {...motionOptions}>
						{allText.sectionHeaders[2].text4}
					</motion.p>
				</div>
				<div className={styles.item5}>
					<motion.p className={styles.subItem5} {...motionOptions}>
						{allText.sectionHeaders[2].text5}
					</motion.p>
				</div>
				<div className={styles.img3}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>					
						<Image
							src='/picturies/img3.svg'
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

export default Section3;
