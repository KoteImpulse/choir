import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Section9.module.scss';
import Image from 'next/image';
import { allText, motionOptions, rootMargin } from '../../data';
import { motion } from 'framer-motion';
import SectionHeader from '../../SectionHeader/SectionHeader';

interface Section9Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Section9: FC<Section9Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.Section9)} {...props}>
			<div className={styles.container}>
				<div className={styles.titleContent}>
					<SectionHeader
						text={allText.sectionHeaders[8].header}
						rootMargin={rootMargin}
					/>
				</div>

				<div className={styles.item1}>
					<div className={styles.subItem1}>
						<motion.p className={styles.text1} {...motionOptions}>
							{allText.sectionHeaders[8].text1}
						</motion.p>
						<motion.p className={styles.text2} {...motionOptions}>
							{allText.sectionHeaders[8].text2}
						</motion.p>
					</div>
					<div className={styles.subItem2}>
						<motion.p className={styles.text1} {...motionOptions}>
							{allText.sectionHeaders[8].text3}
						</motion.p>
					</div>
					<div className={styles.subItem3}>
						<motion.p className={styles.text1} {...motionOptions}>
							{allText.sectionHeaders[8].text4}
						</motion.p>
						<motion.p className={styles.text2} {...motionOptions}>
							{allText.sectionHeaders[8].text5}
						</motion.p>
					</div>
				</div>

				<div className={styles.img9}>
					<div
						style={{
							position: 'relative',
							display: 'flex',
							width: '100%',
							height: '100%',
						}}
					>
						<Image
							src='/picturies/img9.svg'
							layout='fill'
							objectFit='contain'
							alt='котроткая нота'
						/>
					</div>
				</div>
				<div className={styles.map}>
					<iframe
						title='map google'
						className={styles.mapMap}
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2135.776337849681!2d39.883610616437466!3d57.635288952708564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b291685d4099ef%3A0xeaafed6c268d867e!2z0JrQvtC-0L_QtdGA0LDRgtC40LLQvdCw0Y8g0YPQuy4sIDIsINCv0YDQvtGB0LvQsNCy0LvRjCwg0K_RgNC-0YHQu9Cw0LLRgdC60LDRjyDQvtCx0LsuLCAxNTAwMDM!5e0!3m2!1sru!2sru!4v1638546182134!5m2!1sru!2sru'
					/>
				</div>
			</div>
		</div>
	);
};

export default Section9;
