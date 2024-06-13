import React from 'react';
import { AppstoreOutlined, Html5Outlined, JavaScriptOutlined, PlusOutlined, ProjectOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


export default function MainMenu(){

	function getItem(label, key, icon, children) {

		return {
			key,
			icon,
			children,
			label,
		};

	}

	const items = [
		getItem('Settings', '1', <SettingOutlined />),
		getItem('Create new project', '2', <PlusOutlined />),
		// getItem('JS', '2', <JavaScriptOutlined />),
		getItem('My projects', '3', <ProjectOutlined />),
		getItem('Samples', '4', <AppstoreOutlined />),
	];


	return (

		<Menu defaultSelectedKeys={['3']} mode="inline" items={ items } />

	);


}