import React from 'react';
import { Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';

import { SETTINGS, NEW_PROJECT, MY_PROJECTS, SAMPLES } from '../mainMenu/constants';
import { UserProjects } from '../userProjects';
import { UserProjectTemplate } from '../userProjectTemplate';
import { UserSettings } from '../userSettings';

import { WORKING_SCREEN } from './constants';

const { Content, Sider } = Layout;

const { Text } = Typography;


export default function WorkAreaLayout(){

	const currentSelectedOption = useSelector(state => state.mainMenu.currentSelectedOption);


	function getContentsComponent(){

		switch(currentSelectedOption){

			case MY_PROJECTS:
				return <UserProjects />;

			case SETTINGS:
				return <UserSettings />

			default:
				return null;

		}

	}


	return (

		<Layout style={{
			height: '97%',
			overflowY: 'scroll'
		}}>
			<Content
				style={{
					padding: '0 1.3rem',
					minHeight: 280,
				}}
			>
				{ getContentsComponent() }
				
			</Content>
		</Layout>

	);

}