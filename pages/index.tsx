import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Section1 from '../Components/Sections/Section1/Section1';
import Section2 from '../Components/Sections/Section2/Section2';
import Section3 from '../Components/Sections/Section3/Section3';
import Section4 from '../Components/Sections/Section4/Section4';
import Section5 from '../Components/Sections/Section5/Section5';
import Section6 from '../Components/Sections/Section6/Section6';
import Section7 from '../Components/Sections/Section7/Section7';
import Section8 from '../Components/Sections/Section8/Section8';
import Section9 from '../Components/Sections/Section9/Section9';

interface HomeProps {}

const Index: NextPage<HomeProps> = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Хор Пилецкого</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content={'Православный хор Пилецкого'}
				/>
				<meta property='og:locale' content='ru_RU' />
				<meta property='og:type' content='website' />
				<meta
					property='og:description'
					content={'Православный хор Пилецкого'}
				/>
				<meta property='og:title' content={'Хор Пилецкого'} />
				<meta
					name='keywords'
					content={'церокное пение, пение, уроки, хор'}
				/>
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1'
				/>
			</Head>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Section9 />
		</>
	);
};

export default Index;
