import React from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { useDispatch } from 'react-redux'

import { setUsername } from './authSlice';

const { Text, Title } = Typography;


export default function Login(){

	const dispatch = useDispatch();


	const onFinish = async (values) => {

		console.log(values);

		if(values.username){

			dispatch(setUsername(values.username));

		}

	}

	

	return (

		<Form className="login-form" layout="vertical" name="login_form" onFinish={ onFinish } size="large">

			<Space direction="vertical">

				<Title level={ 4 }>Login</Title>

				<Form.Item 
					name="username" 
					rules={[
						{
							message: "Mandatory field",
							required: true
						}
					]}
				>

					<Input placeholder="Username" size="large" />

				</Form.Item>

				<Form.Item
					name="password"
					rules={[
						{
							message: "Mandatory field",
							required: true	
						}
					]}
				>
					<Input.Password placeholder="Password" size="large" />
				</Form.Item>

				<Form.Item>

					<Button type="primary" htmlType="submit">Log in</Button>

				</Form.Item>

				<Text>Don't have an account yet?<Button type="link">Create Account</Button></Text>
				
			</Space>




		</Form>

	);

}