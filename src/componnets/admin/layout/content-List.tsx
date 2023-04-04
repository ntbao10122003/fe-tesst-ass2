import React from 'react';
import { Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const ContentList = () => {
    
    return (
        
        <div>
            <h1 className='font-bold text-lg '>điện thoại </h1>
            <Select
                defaultValue="lucy"
                style={{ width: 200 }}
                onChange={handleChange}
                options={[
                {
                    label: 'Manager',
                    options: [
                    { label: 'Jack', value: 'jack' },
                    { label: 'Lucy', value: 'lucy' },
                    ],
                },
                {
                    label: 'Engineer',
                    options: [{ label: 'yiminghe', value: 'Yiminghe' }],
                },
                 ]}
            />
       


                 {/* table */}
             <div> <Table dataSource={dataSource} columns={columns} /></div>
                 
        </div>
    )
}

export default ContentList