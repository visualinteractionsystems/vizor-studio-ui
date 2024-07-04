import React from 'react';
import { ConfigProvider, theme } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { MainLayout } from '../mainLayout';
import { SOURCE_TYPES } from '../userSettings/constants';
import { addSourcesSettings } from '../userSettings/userSettingsSlice';
// theme.defaultAlgorithm



function capitalizeFirstLetter(string) {
	string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}



export default function App() {


	const dispatch = useDispatch();

	const sources = useSelector(state => state.userSettings.sourcesSettings);

	if(sources.length === 0){

		setTimeout(() => {

			let sourcesCount = Math.ceil(Math.random() * 4);

			let sourceTypesNames = Object.keys(SOURCE_TYPES);

			for(let i = 0; i < sourcesCount; i++){

				let sourceTypeIndex = Math.ceil(Math.random() * sourceTypesNames.length) % sourceTypesNames.length;

				let sourceTypeName = capitalizeFirstLetter(sourceTypesNames[sourceTypeIndex]).replaceAll('_', ' ');
				let connectionUrl = `${ sourceTypeIndex === 0 ? 'mysql://user:password@serverURL/DBName' : sourceTypeIndex === 1 ? 'mongo://user:password@shardURL/DBName' : 'file://localfileURL.xlsx' }`;
				let userSourceName = `My source ${ i }`;
				
				dispatch(addSourcesSettings({ sourceTypeName, connectionUrl, userSourceName }));
				
			}			
			
		}, 500);

	}



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