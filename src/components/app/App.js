import React from 'react';
import { ConfigProvider, Space, theme } from 'antd';

import { MainLayout } from '../mainLayout';
// theme.defaultAlgorithm

export default function App() {

	return (

		<ConfigProvider 
			theme={{
				algorithm: [ theme.darkAlgorithm, theme.compactAlgorithm ],
			}}
		>

			<MainLayout />

		</ConfigProvider>


	);

}