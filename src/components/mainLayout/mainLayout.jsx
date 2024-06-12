import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import { MainHeader } from '../mainHeader';
import { MainMenu } from '../mainMenu';
import { Login } from '../auth';

const { Header, Content, Sider } = Layout;


export default function MainLayout(){

	const username = useSelector(state => state.auth.username);

	return (

		<Layout
			style={{
				minHeight: '100vh',
			}}

		>

			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>

				<MainHeader />

			</Header>

			<Layout>

				{
					username &&
					<Sider collapsed={ true } collapsedWidth={ 50 }>

						<MainMenu />

					</Sider>
				}



				<Content>

					{
						username ?
						null
						:
						<Login />
					}


				</Content>

				

			</Layout>

		</Layout>

	);

}