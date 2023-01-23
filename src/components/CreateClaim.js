import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, DatePicker, Button} from 'antd';


const API_URL_HERE = 'http://localhost:8001/api/v1/claims'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function CreateClaim() {
  const [form] = Form.useForm();
  const [incidentDate, setIncidentDate] = useState(null);

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async values => {
    try {
      const response = await axios.post(API_URL_HERE, {
        amount: values.claimAmount,
        holder: values.holderName,
        policyNumber: values.policyNumber,
        insuredName: values.insuredName,
        description: values.description,
        processingFee: values.processingFee,
        incidentDate: incidentDate
      });
      console.log(response);
      form.resetFields();
      setIncidentDate(null);
    } catch (error) {
      console.error(error);
    }
  };

  const onIncidentDateChange = date => {
    setIncidentDate(date);
  };

  return (
    <div className="create-claim-container">
      <Form
        {...layout}
        form={form}
        name="create-claim"
        onFinish={onFinish}
        initialValues={{
          claimAmount: 0.00,
          processingFee: 0.00
        }}
      >
        <Form.Item
          label="Policy Number"
          name="policyNumber"
          rules={[{ required: true, message: 'Please input your policy number!' }]}
        >
          <Input placeholder="Enter your policy number" />
        </Form.Item>

        <Form.Item
          label="Holder Name"
          name="holderName"
          rules={[{ required: true, message: 'Please input the holder name!' }]}
        >
          <Input placeholder="Enter the holder name" />
        </Form.Item>

        <Form.Item
          label="Insured Item"
          name="insuredName"
          rules={[{ required: true, message: 'Please input the insured item!' }]}
        >
          <Input placeholder="Enter the insured item" />
        </Form.Item>

        <Form.Item
          label="Claim Amount"
          name="claimAmount"
          rules={[{ required: true, message: 'Please input the claim amount!' }]}
        >
          <Input placeholder="Enter the claim amount" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea placeholder="Enter the description" />
        </Form.Item>

        <Form.Item
          label="Incident Date"
          name="incidentDate"
          rules={[{ required: true, message: 'Please select the incident date!' }]}
        >
          <DatePicker onChange={onIncidentDateChange} value={incidentDate} />
        </Form.Item>

        <Form.Item
          label="Processing Fee"
          name="processingFee"
          rules={[{ required: true, message: 'Please input the processing fee!' }]}
        >
          <Input placeholder="Enter the processing fee" />
        </Form.Item>

        <Form.Item wrapper
            col={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
            Reset
            </Button>
        </Form.Item>
    </Form>
</div>
);
}

export default CreateClaim;