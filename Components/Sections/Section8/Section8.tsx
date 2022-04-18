import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Section8.module.scss';
import Image from 'next/image';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion } from 'framer-motion';
import SectionHeader from '../../SectionHeader/SectionHeader';
import StyledLink from '../../StyledLink/StyledLink';

interface Section8Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Section8: FC<Section8Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.Section8)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[7].header}
						rootMargin={rootMargin}
					/>
				</div>
				<div className={styles.subtitle1}>
					<motion.p className={styles.text1} {...motionOptions}>
						{allText.sectionHeaders[7].text1}
					</motion.p>
				</div>
				<div className={styles.subtitle2}>
					<motion.p className={styles.text2} {...motionOptions}>
						{allText.sectionHeaders[7].text2}
					</motion.p>
				</div>

				<div className={styles.item1}>
					<motion.p className={styles.text} {...motionOptions}>
						{allText.phases[0].header1}
					</motion.p>
				</div>
				<div className={styles.item2}>
					<motion.p className={styles.text} {...motionOptions}>
						{allText.phases[0].header2}
					</motion.p>
				</div>
				<div className={styles.item3}>
					<motion.ul className={styles.text} {...motionOptions}>
						{allText.phases[0].listElements1?.map(
							(listItem, index) => (
								<li key={index}>{listItem}</li>
							)
						)}
					</motion.ul>
				</div>

				<div className={styles.item4}>
					<motion.p className={styles.text} {...motionOptions}>
						{allText.phases[0].listElements2}
					</motion.p>
				</div>
				<div className={styles.item5}>
					<motion.p className={styles.text} {...motionOptions}>
						{allText.phases[1].header1}
					</motion.p>
				</div>
				<div className={styles.item6}>
					<motion.p className={styles.text} {...motionOptions}>
						{allText.phases[1].header2}
					</motion.p>
				</div>
				<div className={styles.item7}>
					<motion.ul className={styles.text} {...motionOptions}>
						{allText.phases[1].listElements?.map(
							(listItem, index) => (
								<li key={index}>{listItem}</li>
							)
						)}
					</motion.ul>
				</div>

				<div className={styles.item8}>
					<motion.p className={styles.text} {...motionOptions}>
						{allText.phases[2].header1}
					</motion.p>
				</div>
				<div className={styles.item81}>
					<motion.p className={styles.text} {...motionOptions}>
						{allText.phases[2].header2}
					</motion.p>
				</div>

				<div className={styles.item9}>
					<motion.ul className={styles.text} {...motionOptions}>
						{allText.phases[2].listElements?.map(
							(listItem, index) => (
								<li key={index}>{listItem}</li>
							)
						)}
					</motion.ul>
				</div>
				<div className={styles.item10}>
					<motion.p className={styles.text1} {...motionOptions}>
						{allText.sectionHeaders[7].text3}
					</motion.p>
					<motion.p className={styles.text2} {...motionOptions}>
						{allText.sectionHeaders[7].text4}
					</motion.p>
				</div>
				<div className={styles.linkContainer}>
					<StyledLink text={allText.buttonText[0].text} />
				</div>
				<div className={styles.img8}>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							width: '100%',
							height: '100%',
						}}
					>
						<Image
							src='/picturies/img8.svg'
							layout='fill'
							objectFit='contain'
							alt='котроткая нота'
						/>
					</div>
				</div>
				<div className={styles.img83}>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							width: '100%',
							height: '100%',
						}}
					>
						<Image
							src='/picturies/img82.svg'
							layout='fill'
							objectFit='contain'
							alt='котроткая нота'
						/>
					</div>
				</div>
				<div className={styles.img82}>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							width: '100%',
							height: '100%',
						}}
					>
						<Image
							src='/picturies/img5.svg'
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

export default Section8;
