// app/page.js

'use client'; // 表示这是客户端渲染的页面

import { useState } from 'react';

export default function ChatPage() {
  const [message, setMessage] = useState('');  // 用户输入的消息
  const [response, setResponse] = useState(''); // 机器人回复

  // 发送消息到后端 API
  const sendMessage = async () => {
    if (!message) return;

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <h1>与 Coze Bot 对话</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="请输入消息"
      />
      <button onClick={sendMessage}>发送</button>

      <div>
        <h2>机器人回复：</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}
