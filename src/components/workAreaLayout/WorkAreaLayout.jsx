import React from 'react';
import { Layout, Typography } from 'antd';

import { UserProjects } from '../userProjects';
import { WORKING_SCREEN } from './constants';

const { Content, Sider } = Layout;

const { Text } = Typography;


export default function WorkAreaLayout(){


	return (

		<Layout>
			<Content
				style={{
					padding: '0 1.3rem',
					minHeight: 280,
				}}
			>
				<UserProjects />
			</Content>
		</Layout>

	);

}