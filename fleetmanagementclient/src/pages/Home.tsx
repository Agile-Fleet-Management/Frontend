import React, { useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('Welcome to our React app!');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('Thank   for clicking!')}>
        Click Me
      </button>
    </div>
  );
};

export default Home;
