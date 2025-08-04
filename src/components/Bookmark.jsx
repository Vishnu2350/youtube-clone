import React, { useEffect, useState } from 'react';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(stored);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🔖 Bookmarked Videos</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {bookmarks.map((video) => (
            <div
              key={video.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.videoTitle} style={{ width: '100%' }} />
              </a>
              <div style={{ padding: '10px' }}>
                <h3>{video.videoTitle}</h3>
                <p style={{ color: '#555' }}>{video.channelTitle}</p>
                <p style={{ fontSize: '13px', color: '#888' }}>{video.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
