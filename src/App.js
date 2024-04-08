import React, { useState, useEffect } from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Ola Amigos!</h1>
        <nav className="navigation">
          <a href="home">Home</a>
          <a href="blogs">Blog</a>
          <a href="services">Services</a>
          <a href="about">About</a>
          <a href="contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}


const MainContent = () => {
  return (
    <div className="main-content">
      <div className='bio'>
        <h2>Hi, I am Kumar Pratyush.</h2>
        <div>
        <TypingEffect />
        </div>
      </div>
    </div>
  );
}

const TypingEffect = () => {
  const [text, setText] = useState('');
  const originalText = "I  am mostly into web dev, system design, dsa and open-source. Let's connect for a better cause!";
  let index = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < originalText.length) {
        setText(prevText => prevText + originalText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); 

    return () => clearInterval(typingInterval); 
  }, [index]);

  return (
    <div className="typing-effect">
      {text}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
