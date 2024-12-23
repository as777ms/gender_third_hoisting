import  { useState } from 'react';

const Forum = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');

  const addTopic = () => {
    setTopics([...topics, newTopic]);
    setNewTopic('');
  };

  return (
    <div className="forum">
      <h2>Форум сообщества</h2>
      <div className="topics">
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
      />
      <button onClick={addTopic}>Создать новую тему</button>
    </div>
  );
};

export default Forum;
