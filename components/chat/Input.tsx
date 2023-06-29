import React, { useState } from 'react'

const Input = () => {
  const [message, setMessage] = useState('');
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
      <div className="flex flex-row  relative w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 ">
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
    </>
  )
}

export default Input