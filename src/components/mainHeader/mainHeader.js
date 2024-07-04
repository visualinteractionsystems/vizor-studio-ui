import React from 'react';
import { BuildOutlined, CloseOutlined, MoonOutlined, PlayCircleOutlined, SunOutlined } from '@ant-design/icons';
import { Menu, Space, Switch, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentProjectIndex } from '../userProjects/userProjectsSlice';

import logo from './images/vizortek.png';


const { Text, Title } = Typography;

export default function MainHeader() {


	const dispatch = useDispatch();

	const username = useSelector(state => state.auth.username);
	const projects = useSelector(state => state.userProjects.projects);
	const currentProjectIndex = useSelector(state => state.userProjects.currentProjectIndex);

	const items = [ { icon: <CloseOutlined />, key: 0, label: 'Close' }, { icon: <BuildOutlined />, key: 1, label: 'Build' }, { icon: <PlayCircleOutlined />, key: 2, label: 'Run' }];

	const menuAction = ({ item, key  }) => {

		switch(key){

			case '0':
				dispatch(setCurrentProjectIndex(-1));
			break;

		}

	}
	
	return (

		<>

			<img className="logo" src={ logo } />

			{
				username &&
				<>
					<Title level={ 4 } style={{ marginLeft: '1.5rem', marginRight: '1.5rem' }}>{ currentProjectIndex !== -1 && projects[currentProjectIndex]?.projectName }</Title>

					
						
						<Menu
							theme="dark"
							mode="horizontal" 
							defaultSelectedKeys={['0']}
							items={ currentProjectIndex !== -1 ? items : [ ]}
							onClick={ menuAction }
							style={{
								flex: 1,
								minWidth: 0,
					         }}
				        />

					
					


			        <Space size="large">

				        <Text>Welcome { username }</Text>



				        <Switch
							checkedChildren={ <MoonOutlined /> }
							unCheckedChildren={ <SunOutlined /> }
							defaultChecked
						/>

					</Space>
				</>

			}

			

        </>

	)

}