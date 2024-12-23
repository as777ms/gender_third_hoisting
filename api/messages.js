let messages = [{ text: 'Hello', timestamp: '12:00 PM' }];

export default (req, res) => {
  if (req.method === 'GET') {
    // Serve all messages
    res.status(200).json(messages);
  } else if (req.method === 'POST') {
    // Add a new message
    const newMessage = req.body;
    messages.push(newMessage);
    res.status(201).json(newMessage);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
