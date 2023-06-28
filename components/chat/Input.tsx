import { Layout } from 'antd';
import React, { useState } from 'react'
const { Header, Footer, Sider, Content } = Layout;
const Input = () => {
    const [message, setMessage] = useState('');
    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#108ee9',
      };
      
      const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#3ba0e9',
      };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
      };
    
      const handleSendMessage = () => {
        // 在这里处理发送消息的逻辑
        console.log('发送消息:', message);
        setMessage(''); // 清空消息输入框
      };

    return (
        <>
    <div className=" justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-row">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-2 m-2"
          placeholder="输入消息..."
        />
        {/* <div className="flex-grow"></div> 占据剩余空间 */}
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          发送
        </button>
      </div>
    </div>

    <Layout>
      <Layout hasSider>
        <Sider style={siderStyle} className='80%'>Sider</Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Layout>
    
        </>
    )
}

export default Input