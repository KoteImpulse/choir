import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import StyledLink from '../StyledLink/StyledLink';
import { allText } from '../data';

interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<div className={styles.logo}>
				<span className={styles.logoText1}>Православный</span>
				<span className={styles.logoText2}>хор Пилецкого</span>
			</div>
			<div className={styles.linkContainer}>
				<StyledLink text={allText.buttonText[0].text} />
			</div>
		</header>
	);
};

export default Header;
