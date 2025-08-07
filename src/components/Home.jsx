import React, { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('Tamil Programming Tutorials');
  const [inputText, setInputText] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem('bookmarks')) || []);
  const [watched, setWatched] = useState(() => JSON.parse(localStorage.getItem('watched')) || []);
  

  const API_KEY = 'AIzaSyBkJ9KJ4RZIRzeHVxvoR65Ta5fQ-ptqBJ8';

  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Tamil Tutorials'];

  const fetchVideos = (loadMore = false, customQuery = searchQuery) => {
    setLoading(true);
    const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${customQuery}&order=date&type=video&maxResults=12&key=${API_KEY}`;
    const fullUrl = loadMore && nextPageToken ? `${baseUrl}&pageToken=${nextPageToken}` : baseUrl;

    fetch(fullUrl)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.items.map((item) => ({
          id: item.id.videoId,
          videoTitle: item.snippet.title,
          description: item.snippet.description,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
          date: new Date(item.snippet.publishedAt).toLocaleDateString(),
        }));

        setVideos((prev) => (loadMore ? [...prev, ...formatted] : formatted));
        setNextPageToken(data.nextPageToken);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch videos:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputText);
    setActiveCategory('');
    setNextPageToken('');
    fetchVideos(false, inputText);
  };

  const handleCategoryClick = (category) => {
    const query = category === 'All' ? 'Tamil Programming Tutorials' : category;
    setSearchQuery(query);
    setActiveCategory(category);
    setInputText('');
    setNextPageToken('');
    fetchVideos(false, query);
  };

  const isBookmarked = (id) => bookmarks.some((v) => v.id === id);

  const toggleBookmark = (video) => {
    const exists = isBookmarked(video.id);
    const updated = exists
      ? bookmarks.filter((v) => v.id !== video.id)
      : [...bookmarks, video];
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const playVideo = (video) => {
    const updatedWatched = [video, ...watched.filter((v) => v.id !== video.id)];
    setWatched(updatedWatched);
    localStorage.setItem('watched', JSON.stringify(updatedWatched));
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>🎓 Learn Hub - Video Library</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ display: 'flex', marginBottom: '20px', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search videos..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#cc0000',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          🔍 Search
        </button>
      </form>

      {/* Categories */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '20px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            style={{
              padding: '8px 16px',
              backgroundColor: activeCategory === cat ? '#cc0000' : '#f0f0f0',
              color: activeCategory === cat ? 'white' : '#333',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={video.thumbnail}
                alt={video.videoTitle}
                onClick={() => playVideo(video)}
                style={{ width: '100%' }}
              />
              <FaBookmark
                onClick={() => toggleBookmark(video)}
                title={isBookmarked(video.id) ? 'Remove Bookmark' : 'Add Bookmark'}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  fontSize: '20px',
                  color: isBookmarked(video.id) ? '#cc0000' : '#aaa',
                  background: 'white',
                  padding: '5px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              />
            </div>

            <div style={{ padding: '10px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px 0' }}>{video.videoTitle}</h2>
              <p style={{ fontSize: '14px', color: '#555', marginBottom: '5px' }}>📺 {video.channelTitle}</p>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                {video.description.slice(0, 80)}...
              </p>
              <div style={{ fontSize: '12px', color: '#888', display: 'flex', justifyContent: 'space-between' }}>
                <span>{video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {nextPageToken && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={() => fetchVideos(true)}
            disabled={loading}
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              backgroundColor: '#3f51b5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {loading ? 'Loading...' : '🔄 Load More'}
          </button>
        </div>
      )}

      {/* Modal Player */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'auto',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '10px' }}>{selectedVideo.videoTitle}</h2>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.videoTitle}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <br />
            <button
              onClick={closeModal}
              style={{
                marginTop: '15px',
                backgroundColor: '#cc0000',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
