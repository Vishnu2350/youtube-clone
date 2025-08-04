import React from 'react';

const About = () => {
  return (
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        padding: '50px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        color: '#2c2c2c',
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: '38px',
          fontWeight: '700',
          color: '#cc0000',
          marginBottom: '15px',
          letterSpacing: '0.5px',
        }}
      >
        📘 About Learn Hub
      </h1>

      <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '40px', color: '#444' }}>
        <strong>Learn Hub</strong> is a smart and simple video learning platform built using React. It connects Tamil
        learners to powerful tech tutorials using the YouTube API. With features like bookmarks, watch history, and
        category filtering, it’s built to make your learning experience smooth and effective.
      </p>

      {/* Features Section */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '30px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
          marginBottom: '35px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#222',
            marginBottom: '20px',
          }}
        >
          ✨ Key Features
        </h2>
        <ul
          style={{
            fontSize: '17px',
            color: '#555',
            lineHeight: '1.8',
            paddingLeft: '22px',
          }}
        >
          <li>🔍 Search Tamil tech tutorials directly from YouTube</li>
          <li>📌 Bookmark your favorite videos</li>
          <li>🕒 Tracks watched history for learning continuity</li>
          <li>📱 Fully responsive, works on all screen sizes</li>
          <li>⚛️ Built with React, YouTube API & React Router</li>
        </ul>
      </div>

      {/* Developer Card */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '14px',
          padding: '25px',
          marginBottom: '35px',
          boxShadow: '0 3px 10px rgba(0,0,0,0.04)',
          flexWrap: 'wrap',
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="Developer"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #cc0000',
          }}
        />
        <div>
          <h2 style={{ fontSize: '20px', margin: '0 0 10px 0', color: '#333' }}>
            👨‍💻 Developed by Vishnu
          </h2>
          <p style={{ fontSize: '16px', color: '#555', maxWidth: '500px' }}>
            I'm a frontend developer from Kumbakonam who loves to build educational apps, share Tamil tech knowledge,
            and help beginners explore the world of programming in a simple way.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '25px',
          borderRadius: '12px',
          border: '1px solid #eee',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        }}
      >
        <h2
          style={{
            fontSize: '22px',
            marginBottom: '15px',
            color: '#333',
            fontWeight: '600',
          }}
        >
          📫 Contact Me
        </h2>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
          Feel free to get in touch for suggestions, ideas, or collaboration.
        </p>
        <a
          href="mailto:vishnucse8@gmail.com"
          style={{
            display: 'inline-block',
            marginTop: '5px',
            fontSize: '16px',
            color: '#cc0000',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          ✉️ vishnucse8@gmail.com
        </a>
      </div>
    </div>
  );
};

export default About;
