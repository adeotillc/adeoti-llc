import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URL } from '../config';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchSinglePost();
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', padding: '100px' }}>Loading...</div>;

  return (
    /* This outer div acts as a strict boundary wrapper */
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      
      <article style={{ 
        width: '100%', 
        maxWidth: '700px', // The strict Neil Patel width constraint
        margin: '40px 0', 
        padding: '0 20px',
        fontFamily: 'Lato, sans-serif',
        textAlign: 'left' // Ensures text doesn't inherit centering from parent containers
      }}>
        
        <Link to="/blog" style={{ color: 'var(--brand-gold)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>
          &larr; Back to Blog
        </Link>
        
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '900', 
          color: 'var(--text-dark)', 
          lineHeight: '1.2',
          marginBottom: '15px' 
        }}>
          {post.title}
        </h1>
        
        <p style={{ color: '#888', marginBottom: '40px', fontSize: '1.1rem' }}>
          By <strong style={{ color: 'var(--brand-brown)' }}>{post.author}</strong> &bull; {new Date(post.createdAt).toLocaleDateString()}
        </p>

        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
        )}

        <div 
          className="rich-text-content"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <style>{`
          .rich-text-content {
            font-size: 1.15rem; 
            line-height: 1.9;
            color: #333333;
          }
          .rich-text-content p {
            margin-bottom: 30px; 
          }
          .rich-text-content h2, 
          .rich-text-content h3 {
            color: var(--brand-brown);
            font-weight: 900;
            margin-top: 50px;
            margin-bottom: 20px;
            line-height: 1.3;
          }
          .rich-text-content h2 {
            font-size: 2.2rem;
          }
          .rich-text-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 30px 0; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          .rich-text-content a {
            color: var(--brand-gold);
            font-weight: bold;
            text-decoration: none;
          }
          .rich-text-content blockquote {
            border-left: 5px solid var(--brand-gold);
            padding-left: 20px;
            font-style: italic;
            margin: 40px 0;
            color: #555;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 0 8px 8px 0;
          }
        `}</style>
      </article>
    </div>
  );
};

export default SinglePost;