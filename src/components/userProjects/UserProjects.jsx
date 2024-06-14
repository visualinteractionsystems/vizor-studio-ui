import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Card,Space, Spin, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


import { setProjects } from './userProjectsSlice';

const { Text, Title } = Typography;


export default function UserProjects(){

	const dispatch = useDispatch();

	const projects = useSelector(state => state.userProjects.projects);

	let tmpProjects = [ ];

	if(projects.length === 0){

		setTimeout(() => {

			let projectsCount = Math.ceil(Math.random() * 5);

			for(let i = 0; i < projectsCount; i++){

				let date = new Date();
				date.setDate(date.getDate() - 2 * i);
				let projectName = `My project ${ i + 1 }`;
				let projectDate = `${ date.getMonth() + 1 }-${ date.getDate() }-${ date.getFullYear() }`;
				let projectDescription = `Some lines for project description.`;

				dispatch(setProjects({ projectName, projectDate, projectDescription }));
				
			}

			console.log(tmpProjects);

			
			
		}, 500);

	}


	return(

		<Space direction="vertical" size={ 16 }>

			<Title level={ 4 }>My projects</Title>

			{
				projects.length === 0 ?
				<LoadingOutlined fullscreen style={{ fontSize: 48 }} spin />
				:
				projects.map((project, j) => 
					<Card key={ `project_${ project.projectName }_${ j }` } title={ project.projectName } extra={ <Button type="link">Open</Button> } style={{ width: '30rem' }}>
						<Text style={{ fontSize: '1.1rem' }}>{ project.projectDescription }</Text> <br/>
						<Text>Last accessed on { project.projectDate }</Text>
					</Card>

				)
			}

		</Space>

	);

}