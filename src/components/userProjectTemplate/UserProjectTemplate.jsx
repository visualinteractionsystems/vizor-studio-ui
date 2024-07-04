import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Collapse, Divider, Layout, Space, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UnControlled as CodeMirror } from 'react-codemirror2'

import { setCurrentProjectIndex } from '../userProjects/userProjectsSlice';

const { Content, Header, Sider } = Layout;

const { Title } = Typography;


export default function UserProjectTemplate () {

	const projects = useSelector(state => state.userProjects.projects);
	const currentProjectIndex = useSelector(state => state.userProjects.currentProjectIndex);

	const dispatch = useDispatch();


	
	const items = [

		{
			key: 'css',
			label: 'CSS',
			children: <CodeMirror
				value='body, html { margin: 0 }'
				options={{
					mode: 'css',
					theme: 'material',
					lineNumbers: true
				}}
				onChange={(editor, data, value) => {

				}}
			/>
		},
		{
			key: 'html',
			label: 'HTML',
			children: <CodeMirror
				value='<!DOCTYPE html>'
				options={{
					mode: 'html',
					theme: 'material',
					lineNumbers: true
				}}
				onChange={(editor, data, value) => {

				}}
			/>
		},
		{
			key: 'js',
			label: 'JS',
			children:<CodeMirror
				value=''
				options={{
					mode: 'javascript',
					theme: 'material',
					lineNumbers: true
				}}
				onChange={(editor, data, value) => {

				}}
			/>
		}

	];


	return (

		<Layout style={{ height: '100%', marginLeft: -20 }}>

			
			<Sider collapsed={ false } width={ 470 }>

				<Collapse accordion={ true } items={ items } defaultActiveKey={['js']} />

			</Sider>
		


			<Content style={{ height: '100%' }}>

				Preview

			</Content>

			

		</Layout>

	);

}