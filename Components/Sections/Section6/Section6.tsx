import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Section6.module.scss';
import Image from 'next/image';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion } from 'framer-motion';
import SectionHeader from '../../SectionHeader/SectionHeader';

interface Section6Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Section6: FC<Section6Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.Section6)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[5].header}
						rootMargin={rootMargin}
					/>
				</div>
				<motion.div className={styles.item1} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.skillsText[0].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.skillsText[0].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item2} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.skillsText[1].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.skillsText[1].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item3} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.skillsText[2].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.skillsText[2].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item4} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.skillsText[3].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.skillsText[3].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item5} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.skillsText[4].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.skillsText[4].text}
						</p>
					</div>
				</motion.div>

				<motion.div className={styles.item6} {...motionOptions}>
					<div className={styles.subItem1}>
						<p className={styles.text1}>
							{allText.skillsText[5].header}
						</p>
					</div>
					<div className={styles.subItem2}>
						<p className={styles.text2}>
							{allText.skillsText[5].text}
						</p>
					</div>
				</motion.div>

				<div className={styles.img6}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>
						<Image
							src='/picturies/img6.svg'
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

export default Section6;
