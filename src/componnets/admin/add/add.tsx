import { Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import FormAdmin from "./form-addmin"
// load-img
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';


const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

//form
import { Form, Input, Button ,Select } from 'antd';
import type { FormItemProps } from 'antd';

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const onFinish = (value: object) => {
    console.log(value);
  };


const Add = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
    return (
        <div className="title-add-admin">
            <div><h2 className='pt-10px ' >Thêm mới sản phẩm </h2></div>
            <Row>
                    <Col flex={2}>
                        <div className='form-load-img'>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                        </div>
                        <div className='commet'>
                            <textarea name="" id="" cols="" rows="5" style={{width:'80%'}}>

                            </textarea>
                        </div>
                    </Col>



                    <Col flex={3}>
                        <div>
                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                  <MyFormItemGroup>
                    <MyFormItem >
                        <MyFormItem name="firstName" label="Tên sản phẩm ">
                          
                          <Input />
                        </MyFormItem>

                      <div className='price-admin' style={{display:'flex' , justifyContent:'space-between'}} >
                        <MyFormItem name="lastName" style={{width:"45%"}} label="Giá khuyến mãi">
                          <Input />
                        </MyFormItem>

                        <MyFormItem name="lastName" style={{width:"45%"}} label="Giá gốc">
                          <Input />
                        </MyFormItem>
                      </div>
                      

                    </MyFormItem>
            
                      <MyFormItem name="Danhmuc" label="Danh mục">
                        <Select>
                        <Select.Option value="demo">laptop</Select.Option>
                        <Select.Option value="demo">điện thoại</Select.Option>
                        <Select.Option value="demo">âm thanh</Select.Option>
                        </Select>   
                      </MyFormItem>

                                  <div className='commet'>
                                      <h2>đặc điểm nổi bật</h2>
                                      <textarea name="" id="" cols="" rows="5" style={{width:'100%'}}>

                                      </textarea>
                                  </div>

                                  
                                  <div className='commet'>
                                      <h2>mô tả dài</h2>
                                      <textarea name="" id="" cols="" rows="5" style={{width:'100%'}}>

                                      </textarea>
                                  </div>
                  </MyFormItemGroup>
  
                <Button type="primary" style={{border:'1px solid black' , backgroundColor:'red'}} htmlType="submit">
                  Submit
                </Button>
      </Form>
                        </div>                        
                    </Col>
            </Row>

        </div>
    )
}

export default Add