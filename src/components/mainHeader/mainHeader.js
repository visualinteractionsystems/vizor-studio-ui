import React from 'react';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Menu, Space, Switch, Typography } from 'antd';
import { useSelector } from 'react-redux';

import logo from './images/vizortek.png';


const { Text, Title } = Typography;

export default function MainHeader() {


	const username = useSelector(state => state.auth.username);

	const items = [ { key: 0, label: 'Home' }];
	
	return (

		<>

			<img className="logo" src={ logo } />

			{
				username &&
				<>
					<Title level={ 5 } style={{ marginLeft: '1.5rem', marginRight: '1.5rem' }}>Project name here</Title>

					<Menu
						theme="dark"
						mode="horizontal" 
						defaultSelectedKeys={['0']}
						items={ items }
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