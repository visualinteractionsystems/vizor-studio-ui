import React from 'react';
import { AppstoreOutlined, Html5Outlined, JavaScriptOutlined, PlusOutlined, ProjectOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getMenuItem } from '../utils/functions';

import { SETTINGS, NEW_PROJECT, MY_PROJECTS, SAMPLES } from './constants';
import { setCurrentSelectedOption } from './mainMenuSlice';


export default function MainMenu(){

	const dispatch = useDispatch();

	const currentSelectedOption = useSelector(state => state.mainMenu.currentSelectedOption);
	
	const items = [
		getMenuItem('Settings', SETTINGS, <SettingOutlined />),
		getMenuItem('Create new project', NEW_PROJECT, <PlusOutlined />),
		// getItem('JS', '2', <JavaScriptOutlined />),
		getMenuItem('My projects', MY_PROJECTS, <ProjectOutlined />),
		getMenuItem('Samples', SAMPLES, <AppstoreOutlined />),
	];


	function optionSelected(option){

		const { item, key } = option;

		dispatch(setCurrentSelectedOption(key));

	}


	return (

		<Menu defaultSelectedKeys={[ currentSelectedOption ]} mode="inline" items={ items } onClick={ optionSelected } />

	);


}