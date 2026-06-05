import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GradientBanner from '../components/GradientBanner';
import { API_URL } from '../config';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) throw new Error('Failed to load articles. Please try again later.');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: '0 50px 60px', minHeight: '60vh' }}>
      <GradientBanner title="Our Blog Posts" subtitle="Insights, news, and updates from our team" />
      
      {/* Loading & Error States */}
      {loading && <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: 'var(--brand-gold)' }}>Fetching latest articles...</div>}
      {error && <div style={{ textAlign: 'center', padding: '40px', color: 'red', border: '1px solid red', borderRadius: '8px' }}>{error}</div>}

      {!loading && !error && posts.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>No blog posts available yet.</p>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {posts.map(post => (
          <div key={post._id} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            {post.imageUrl && (
              <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            )}
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--brand-brown)', marginBottom: '10px' }}>{post.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '15px' }}>
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              {/* Note: Strip HTML tags for the preview snippet using regex */}
              <p style={{ marginBottom: '15px' }}>{post.content.replace(/<[^>]+>/g, '').substring(0, 100)}...</p>
              <Link to={`/blog/${post._id}`} style={{ color: 'var(--brand-gold)', fontWeight: 'bold', textDecoration: 'none' }}>
                Read Full Article &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;