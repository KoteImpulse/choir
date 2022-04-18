import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Section5.module.scss';
import Image from 'next/image';
import SectionHeader from '../../SectionHeader/SectionHeader';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion } from 'framer-motion';

interface Section5Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Section5: FC<Section5Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.Section5)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[4].header}
						rootMargin={rootMargin}
					/>
				</div>
				<div className={styles.textContent}>
					<div className={styles.item1}>
						<motion.p
							className={styles.subItem1}
							{...motionOptions}
						>
							{allText.sectionHeaders[4].text1}
						</motion.p>
					</div>
					<motion.div className={styles.author} {...motionOptions}>
						<div className={styles.item2}>
							<p className={styles.subItem2}>
								{allText.sectionHeaders[4].text2}
							</p>
						</div>
						<div className={styles.item3}>
							<p className={styles.subItem3}>
								{allText.sectionHeaders[4].text3}
							</p>
						</div>
					</motion.div>
				</div>
				<div className={styles.img5}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>
						<Image
							src='/picturies/img5.svg'
							layout='fill'
							objectFit='contain'
							alt='котроткая нота'
						/>
					</div>
				</div>
				<div className={styles.choir}>
					<div style={{position: "relative", display: 'flex', width: "100%", height: "100%"}}>
						<Image
							src='/picturies/pc3.png'
							layout='fill'
							objectFit='cover'
							alt='Руководитель хора'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section5;
