import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GradientBanner from '../GradientBanner';
import { API_URL } from '../../config';

const BlogPreviewSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        
        // Only show the 3 most recent posts for the homepage preview
        setPosts(data.slice(0, 3)); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs exactly once on mount

  // 1. Loading State
  if (loading) return <div style={{ textAlign: 'center', padding: '40px' }}>Loading the latest insights...</div>;
  
  // 2. Error State
  if (error) return <div style={{ textAlign: 'center', color: 'red', padding: '40px' }}>{error}</div>;

  return (
    <section style={{ padding: '0 50px 60px' }}>
      <GradientBanner title="Our Blog Posts" subtitle="Latest news and articles" />
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {posts.map(post => (
          <div key={post._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', flex: 1, minWidth: '280px' }}>
            <h3 style={{ color: 'var(--brand-brown)', marginBottom: '10px' }}>{post.title}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>
              {new Date(post.createdAt).toLocaleDateString()} | By {post.author}
            </p>
            <p style={{ marginBottom: '15px' }}>{post.content.substring(0, 100)}...</p>
            
            {/* Link to the dynamic single post page */}
            <Link to={`/blog/${post._id}`} style={{ color: 'var(--brand-gold)', textDecoration: 'none', fontWeight: 'bold' }}>
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreviewSection;