import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Establish the Socket.IO connection
  useEffect(() => {
    // Connect to the backend server (localhost for development)
    const socket = io('http://localhost:5000');

    // Listen for new messages from the server
    socket.on('newMessage', (message) => {
      console.log('New message received:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Send a new message to the server
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = { text: newMessage, timestamp: new Date().toLocaleTimeString() };
      fetch('http://localhost:5000/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      })
        .then(response => response.json())
        .then(() => {
          setNewMessage(''); // Clear the input after sending
        });
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.timestamp}</strong>: {msg.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
