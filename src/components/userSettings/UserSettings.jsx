import React from 'react';
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Form, Input, Modal, Row, Select, Space, Typography } from 'antd';
import { useSelector } from 'react-redux';

import { SOURCE_TYPES } from './constants';

const { Option } = Select;
const { Text, Title } = Typography;



export default function UserSettings(){

	const [ currentEditingSource, setCurrentEditingSource ] = React.useState(undefined);
	const [ isFormDisplaying, setIsFormDisplaying ] = React.useState(false);
	const sources = useSelector(state => state.userSettings.sourcesSettings);

	const [ form ] = Form.useForm();

	const sourceOptions = Object.keys(SOURCE_TYPES);

	const closeModalForm = () => {

		setIsFormDisplaying(false);

	}


	const displayModalForm = (index) => {

		setCurrentEditingSource(sources[index]);
		setIsFormDisplaying(true);

	}


	const updateSourceSettings = (values) => {

		console.log(values);
		setIsFormDisplaying(false);

	}



	return(

		<>

			<Title level={ 4 }>My settings</Title>

			<Row>

				<Col span={ 12 }>

					<Space direction="vertical" size={ 16 }>

						<Title level={ 5 }>My sources <Divider type="vertical"/> <Button type="link" icon={ <PlusOutlined /> } /></Title>

						{
							sources.length === 0 ?
							<LoadingOutlined fullscreen style={{ fontSize: 48 }} spin />
							:
							sources.map((source, j) => 
								<Card key={ `project_${ source.userSourceName }_${ j }` } title={ source.userSourceName } extra={ <Space><Button type="link" onClick={ (e) => displayModalForm(j) }>Edit</Button> <Button type="link" icon={ <DeleteOutlined /> } /></Space>} style={{ width: '30rem' }}>
									<Text style={{ fontSize: '1.1rem' }}>Source type: { source.sourceTypeName }</Text> <br/>
									<Text>Connection string: { source.connectionUrl }</Text>
								</Card>

							)
						}

					</Space>

				</Col>

				<Col span={ 12 }>

					<Space direction="vertical" size={ 16 }>

						<Title level={ 5 }>Real time sources <Divider type="vertical"/> <Button type="link" icon={ <PlusOutlined /> } /></Title>

					</Space>

				</Col>

			</Row>


			<Modal
				onCancel={ closeModalForm }
				onOk={ closeModalForm }
				open={ isFormDisplaying }
				title="Source settings"
			>

				<Form
					name="sourceSetting"
					onFinish={ updateSourceSettings }

				>

					<Form.Item name="sourceTypeName" label="Source type" rules={[ { required: true } ]} >

						<Select placeholder="Select a source type">
							{
								sourceOptions.map((option, i) => <Option key={ `source_type_${ i }` } value="option">{ option }</Option>)
							}
						</Select>

					</Form.Item>


					<Form.Item label="Connection string" name="connectionUrl" rules={[ { required: true } ]}>
						<Input />
					</Form.Item>


				</Form>

			</Modal>

		</>

	);

}