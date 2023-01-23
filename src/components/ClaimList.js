import React from 'react';
import { Table } from 'antd';

const ClaimList = ({ claims }) => {
    const columns = [
    {
      title: 'Claim ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Claim Amount',
      dataIndex: 'amount',
      key: 'claimAmount',
    },
    {
      title: 'Holder Name',
      dataIndex: 'holder',
      key: 'holderName',
    },
    {
      title: 'Policy Number',
      dataIndex: 'policyNumber',
      key: 'policyNumber',
    },
    {
      title: 'Insured Item',
      dataIndex: 'insuredItem',
      key: 'insuredItem',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Incident Date',
      dataIndex: 'incidentDate',
      key: 'incidentDate',
    },
    {
      title: 'Processing Fee',
      dataIndex: 'processingFee',
      key: 'processingFee',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];

  return <Table 
  dataSource={claims} 
  columns={columns} 
  pagination={true} />;
};

export default ClaimList;
