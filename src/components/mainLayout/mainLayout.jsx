import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import { Login } from '../auth';
import { MainHeader } from '../mainHeader';
import { MainMenu } from '../mainMenu';
import { WorkAreaLayout } from '../workAreaLayout';


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
						<WorkAreaLayout />
						:
						<Login />
					}


				</Content>

				

			</Layout>

		</Layout>

	);

}