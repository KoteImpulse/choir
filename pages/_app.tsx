import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store/index';
import Head from 'next/head';
import Header from '../Components/Header/Header';
import '../styles/globals.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
	<>
				<Head>
				<title>Vsion</title>
				<link rel='icon' href='/favicon.ico' />
				{/* <link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/> */}
				<meta name='robots' content='index' />
				<meta name='viewport' content='width=device-width' />
			</Head>
		<Header />
		<Component {...pageProps} />
	</>
);

export default wrapper.withRedux(WrappedApp);
